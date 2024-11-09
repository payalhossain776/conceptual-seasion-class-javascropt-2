const allBtnEqual =document.getElementsByClassName('add-btn')
let contan =0;
 
// all element set to creata all time loop
for(const btn of allBtnEqual){
   // add to button click
   btn.addEventListener('click', function(e){
    contan =contan + 1;
   
   //  search to the element target value
    const placePrice =e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const placeName =e.target.parentNode.childNodes[1].innerText
    const travelToPlace=document.getElementById('placename-container');
    const li = document.createElement('li')
    const p =document.createElement('p');
    p.innerText =placePrice;
    const p2 =document.createElement('p');
    p2.innerText =placeName;
    li.appendChild(p);
    li.appendChild(p2)

const budget =document.getElementById('badget-travel').innerText;
const convertedBudget =parseInt(budget);

if(convertedBudget-parseFloat(placePrice)< 0){
      alert("lol")
      return;
   }
   document.getElementById('badget-travel').innerText =convertedBudget - parseFloat(placePrice);

    travelToPlace.appendChild(p2);
    travelToPlace.appendChild(p);

            //add to the price in total-cost  
     totalCost('total-cost-in-travel', parseInt(placePrice))
         //add to the grand total-cost
            
      // grandTotalCost('total-price-of-money', parseInt(placePrice))
     setInnerText('seat-lavel', contan);                                   
   })
}

function totalCost(id, value){
   const travelPlacePrice =document.getElementById(id).innerText;
   const travelrangamathi =parseInt(travelPlacePrice);
   const sum1 =travelrangamathi + parseInt(value);
   setInnerText('total-cost-in-travel', sum1);
}
function grandTotalCost(catagory){
      const travelPlacePrice =document.getElementById('total-cost-in-travel').innerText;
      const travelrangamathi =parseInt(travelPlacePrice);
      if(catagory === 'bus'){
         setInnerText('total-price-of-money',travelrangamathi + 100);
      }
     else if(catagory === 'train'){
         setInnerText('total-price-of-money',travelrangamathi - 200);
      }
     else if(catagory === 'flight'){
         setInnerText('total-price-of-money',travelrangamathi + 500);
      }
      else{setInnerText('total-price-of-money',travelrangamathi);}
      // setInnerText('total-price-of-money',travelrangamathi);
         
}


function setInnerText(id, value){
      document.getElementById(id).innerText= value;
}