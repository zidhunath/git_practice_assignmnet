let word="abba";
let reverse="";
for(let i=0;i<=word.length-1;i++){
	 reverse+=word[i];
	for(let j=reverse.length-1;j>=0;j--){
		if(reverse==word){
		console.log("Paliendrome");
		}else{
			console.log("Not")
	}
}