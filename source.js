var allData=[];
var math=[];
var count=0;
var sarech=document.getElementById('se');
var print=document.getElementById('print').addEventListener("click",print);
sarech.addEventListener("click",getElment);
function getElment (){

}
var listBbtn =document.querySelectorAll('.button').forEach(item => {
  item.addEventListener('click', event => {
  	var theMainDiv=event.target.parentElement.children;
	var  Meal=theMainDiv[1].innerHTML;
	var priceString= (theMainDiv[2].innerHTML);//priceAsString
   var priceToarr=priceString.split(":");//priceToArray
   var price=priceToarr[priceToarr.length-1];//get price
   allData.push({m:Meal,p:price});
    console.log(allData);
    // i will make a zaqruta hlkneeeeee

    //handle click
  })

})
function print(){

	
	console.log(allData.length);
	
var x=allData.length;
while(x>count){
		
		var mainD=document.getElementById("Em");

		var di =document.createElement("div");
		mainD.appendChild(di);
		var meal=document.createElement("h2");
		var price =document.createElement("p");
			di.appendChild(meal);
			di.appendChild(price);
			meal.innerHTML=allData[count].m;
			price.innerHTML=allData[count].p;
			++count;
			
	}
	console.log(count);

}




