(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);


function HomeController($interval,$timeout) {
		var vm = this;

	vm.shours = [0,1,2,3,4,5,6,7,8,9,10,11,12];
	vm.smins = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
									31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
	vm.ssec = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
								 31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
	vm.bhours = [0,1,2,3,4,5,6,7,8,9,10,11,12];
	vm.bmins = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
						 		31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
	vm.bsec = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
						 31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
vm.shr =0;
vm.ssecond =0;
vm.smin =0;
vm.stime = 0;
vm.bhr = 0;
vm.bsecond =0;
vm.bmin =0;
vm.btime = 0;
var i = 0;
var j = 0;
vm.stime = 0;

vm.getValues = function() {
	var h = document.getElementById("shrid");
	var m = document.getElementById("sminid");
	var s = document.getElementById("ssecid");
	var bh = document.getElementById("bhrid");
	var bm = document.getElementById("bminid");
	var bs = document.getElementById("bsecid");

	vm.shr = h.options[h.selectedIndex].value;
	vm.smin = m.options[m.selectedIndex].value;
  vm.ssecond = s.options[s.selectedIndex].value;
	vm.bhr = bh.options[bh.selectedIndex].value;
	vm.bmin = bm.options[bm.selectedIndex].value;
	vm.bsecond = bs.options[bs.selectedIndex].value;

	vm.stime = (vm.shr*3600) + (vm.smin*60 )+( vm.ssecond*1);
	vm.btime = (vm.bhr*3600) + (vm.bmin*60 )+( vm.bsecond*1);

	vm.sstart();
}

vm.sstart = function(){
	i = vm.stime;

	var xsec = vm.ssecond;
	var xmin = vm.smin;
	var xhr = vm.shr;
	var st = i;

	vm.strack();

vm.sloop =	$interval( function(){

   if((i===(vm.stime -(xmin*60 + xsec)) || i%3600 === 0) && i>=3600 ){
			vm.shr--;
			vm.smin += 59;
	   	}

	if((i===(vm.stime - xsec ) ||( i%60 === 0)) && i>0 ){
				if(i%3600 !== 0 && vm.smin > 0 &&  i>0) {
					vm.smin--;
					}
			vm.ssecond += 59;
		  }

			if (i%3600 !== 0 && i%60 !==0 && vm.ssecond >0 && i >0){
				vm.ssecond--;
			}


		if(i === 0){
			vm.ssecond = xsec;
			vm.smin = xmin;
			vm.shr = xhr;
			i = st;
		}
		i--;
	}, 1000,(vm.stime+1));

   }
vm.strack =  function(){
	i= vm.stime;
	var xsec = vm.ssecond;
	var xmin = vm.smin;
	var xhr = vm.shr;
	var smili = vm.stime*1000;
	$timeout(function(){
		vm.bstart(); },smili);
}

vm.btrack =  function(){
	j = vm.btime;
	var ksec = vm.bsecond;
	var kmin = vm.bmin;
	var khr = vm.bhr;
	var bmili = vm.btime*1000;
	$timeout(function(){
		vm.sstart(); },bmili);
}

vm.bstart = function(){
	j = vm.btime;

	var ksec = vm.bsecond;
	var kmin = vm.bmin;
	var khr = vm.bhr;
	var kt = j;
	vm.btrack();

vm.bloop = $interval( function(){

			  if((j===(vm.btime -(kmin*60 + ksec)) || j%3600 === 0) && j>=3600 ){
			 		vm.bhr--;
			 		vm.bmin += 59;
			 		}

			 if((j===(vm.btime - ksec ) ||( j%60 === 0)) && j>0 ){
			 			if(j%3600 !== 0 && vm.bmin > 0) {
			 				vm.bmin--;
			 				}
			 		vm.bsecond += 59;
			 		}

			 		if (j%3600 !== 0 && j%60 !==0 && vm.bsecond >0){
			 			vm.bsecond--;
						// console.log(vm.bsecond + "minus one break second");
			 		}

				if(j === 0){
					vm.bsecond = ksec;
					vm.bmin = kmin;
					vm.bhr = khr;
					j =kt;
				}
				j--;
			}, 1000, (vm.btime+1));

	}

vm.stop = function(){
	$interval.cancel(vm.sloop);
  $interval.cancel(vm.bloop);
}

}

})();
