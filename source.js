var allData=[];
var hold=[];
var count=0;
var sarech=document.getElementById('se');
var print=document.getElementById('print').addEventListener("click",print);
sarech.addEventListener("keyup",getElment);
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
console.log(allData.length);//to cheack the data enter exist and visible .
var x=allData.length;
while(x>count){
		var mainD=document.getElementById("Em");
		var di =document.createElement("div");// mainFather 
		di.className="subfather";
		mainD.appendChild(di);
		var meal=document.createElement("h2");
		var price =document.createElement("p");
			di.appendChild(meal);
			di.appendChild(price);
			meal.innerHTML=allData[count].m;
			price.innerHTML=allData[count].p;
			hold.push(allData[count].m);
			hold.push(allData[count].p);


			var d=document.createElement("INPUT");
			di.appendChild(d);
			d.type="checkbox"
			d.className="dItem"
			d.value="X";
			++count;
			console.log(d);
			}
		}
/*

document.querySelectorAll(".subfather").forEach(item => {
	console.log(item);
	
  item.addEventListener('change', event => {
  	if(event.target.checked){
  		console.log("Dalia")
  	}
  	else{
  		console.log("dsa")
  	}
  	
  	if(event.target.checked==="true"){
  	console.log(event.target.checked==="true");
  	var mNd=event.target.parentElement.children;
  	console.log(mNd);
  	var c=0;
  	while(mNd.length>c){
  		event.target.parentElement.removeChild(mNd[c]);
  		console.log(event.target.parentElement);
  		++c;
  		}}
  		console.log("hhhh");

  	

})

})
*/

var cBtn=document.getElementById("cl");
cBtn.addEventListener("click",clear);
function clear(){
document.querySelectorAll('.subfather').forEach(item =>{
item.parentNode.removeChild(item);	
})
}
function getElment(e){
	var data=e.target.value;
	var result=hold.filter((x)=>{
		return x===data;
	});
	alert(result.join("")
		);
}