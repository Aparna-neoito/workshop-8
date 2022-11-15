   

// // top-nav responsive

let toggle=document.querySelector('.toggle');

toggle.addEventListener('click',function(){
  let activetoggle=this.nextElementSibling;
  activetoggle.style.display="flex";
  activetoggle.style.height="800px";
  let close=this.nextElementSibling.nextElementSibling
  close.style.display="flex";
  let closetoggle=this.nextElementSibling.nextElementSibling;
  closetoggle.addEventListener('click',function(){
    activetoggle.style.display="none";
    close.style.display="none";
  })
  
});




let select=document.getElementsByClassName('select');
  for(let i = 0; i< select.length; i++){
    select[i].addEventListener('click',function(){
   
      if(!select[i].classList.contains('btn')){
        this.classList.add('btn');
        
      }
      for(let j=0;j<select.length;j++){
        if(this!=select[j]){
          select[j].classList.remove('btn');
        
        }
      }
    });
}
  
// accordion


let accordion=document.getElementsByClassName('accordionheader');
for(let i=0;i<accordion.length;i++){
      accordion[i].addEventListener('click',function(){
       if(this.nextElementSibling.style.display =="none" ) {
            this.nextElementSibling.style.display="flex";
       }else{
            this.nextElementSibling.style.display="none";
       }

       for(let j=0;j<accordion.length;j++){
        if(i!=j){
          accordion[j].nextElementSibling.style.display="none";
        }
      }

     });
   };     


// emailvalidation


let email1btn1=document.getElementsByClassName('emailbtn1');
let email1=document.getElementsByClassName('email1');

for(let i=0;i<email1btn1.length;i++){
  email1btn1[i].addEventListener('click',function(){
  let text=email1[i].value;
  if (text=== "") {
    alert("Email is required") ;
  }
  else if (!text.match(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) {
      alert("Email must be a valid email") ;
    }
})

}


