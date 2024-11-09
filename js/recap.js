const allBtnCode =document.getElementsByClassName('add-btn');
let count =0;

for(const allBtn of allBtnCode){
   allBtn.addEventListener('click', function(e){
    count =count + 1;
    console.log(count); 
   })
 
}