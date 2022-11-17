   

// // top-nav responsive

let toggle=document.querySelector('.toggle');

toggle.addEventListener('click',function(){
  let activetoggle=this.nextElementSibling;
  activetoggle.style.display="flex";
  activetoggle.style.height="900px";
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
let emaildiv=document.getElementsByClassName('emaildiv');
let emailmsg=document.getElementsByClassName('emailmsg');

for(let i=0;i<email1btn1.length;i++){
  email1btn1[i].addEventListener('click',function(){
  let text=email1[i].value;
  email1[i].addEventListener('click',function(){
    email1[i].style.color="black";
    emaildiv[i].style.borderColor="#107EC3";
    emailmsg[i].textContent="";
  })
  if (text=== "") {
  
    emaildiv[i].style.borderColor="red";
    emailmsg[i].textContent="*email is required";
    emailmsg[i].style.fontSize="14px";
    emailmsg[i].style.color="red";
    console.log(emailmsg[i].textContent)
  }
  else if (!text.match(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) {

    emaildiv[i].style.borderColor="red";
    emailmsg[i].style.borderColor="red";
    emailmsg[i].textContent="*email must be a valid email";
    emailmsg[i].style.color="red";
    }
})

}


