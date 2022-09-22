let num=13;
let factor=0;
 for(let i=0;i<=num;i--){	
   if(num%1===0){
		factor++;
   }
 }
 if(factor==2){
	console.log("Prime");
 }else{
	console.log("Not prime");
 }