(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);


function HomeController($interval) {
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
						 31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]
vm.shr =0;
vm.ssecond =0;
vm.smin =0;
vm.stime = 0;
vm.bhr = 0;
vm.bsecond =0;
vm.bmin =0;
vm.btime = 0;
var i = 0;
var j = 0
// vm.stime = 0;
// vm.i=0;
var on =  0;

vm.start = function(){
if(on === 1){
		var xsec = vm.ssecond;
		var xmin = vm.smin;
	$interval( function(){

   if((i===(vm.stime -(xmin*60 + xsec)) || i%3600 === 0) && i>=3600 ){
			vm.shr--;
			console.log("first if statement ran through but didnt sub shr");

			vm.smin += 59;
	   	}

	if((i===(vm.stime - xsec ) ||( i%60 === 0)) && i>0 ){
			// console.log("sub a minitute due to i%60 " + vm.smin);
				if(i%3600 !== 0 && vm.smin > 0) {
					vm.smin--;
					}
			console.log("this is the subtract minute if statement " );
			vm.ssecond += 59;
		  }

			if (i%3600 !== 0 && i%60 !==0 && vm.ssecond >0){
				vm.ssecond--;
			}
			console.log("this is the subtract second if statement");

	i--;

if(i === 0){
				on = 2;
				console.log("done!");
				vm.break();
	      }
				// End of interval function
     }, 1000);
   }
 }

vm.break = function(){
		if(on===2){
			 	var ksec = vm.bsecond;
			 	var kmin = vm.bmin;
			 $interval( function(){

			  if((j===(vm.btime -(kmin*60 + ksec)) || j%3600 === 0) && j>=3600 ){
			 		vm.bhr--;
			 		vm.bmin += 59;
			 		}

			 if((j===(vm.btime - ksec ) ||( j%60 === 0)) && j>0 ){
			 		// console.log("sub a minitute due to i%60 " + vm.smin);
			 			if(j%3600 !== 0 && vm.bmin > 0) {
			 				vm.bmin--;
			 				}
			 		vm.bsecond += 59;
			 		}

			 		if (j%3600 !== 0 && j%60 !==0 && vm.jsecond >0){
			 			vm.bsecond--;
			 		}
			 	j--;

			 if(j === 0){
			 			on = 1;
			 			console.log("done!");
						vm.start();
			 			}
			 			// End of interval function
			 	 }, 1000);
			  }
}





vm.getValues = function() {
	var h = document.getElementById("bhrid");
	var m = document.getElementById("bminid");
	var s = document.getElementById("bsecid");
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
  i = vm.stime;
	j = vm.btime;
	on = 1;
	vm.start();
}

}

})();
