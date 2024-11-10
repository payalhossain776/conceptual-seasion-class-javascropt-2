const allBtnCode =document.getElementsByClassName('add-btn');
let count =0;

for(const allBtn of allBtnCode){
   allBtn.addEventListener('click', function(e){
    count =count + 1;
    allBtnRelatedWork('seat-lavel', count) 
   //  search to price and name
   const placeNamerhssea =e.target.parentNode.childNodes[1].innerText;
   const placePricerhssea=e.target.parentNode.childNodes[3].childNodes[1].innerText;
   const place=document.getElementById('placename-container');
   const p =document.createElement('p');
   p.innerText =placePricerhssea;
   place.appendChild(p)
  
   })
 
}

function totalCost(){
  const totalCostTravel =document.getElementById('total-cost').innerText;
 
} 