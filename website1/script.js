console.log("hello world");
const nav=document.querySelector('.navbar');
const section=document.querySelector('.section-1');
const section2=document.querySelector('.section-2');

// console.log(window.innerHeight);
window.addEventListener("scroll",function(){

let otop=section.offsetTop;
if(this.window.scrollY>otop){
    console.log("hello");
nav.classList.add("sticky");
}
else{
    nav.classList.remove("sticky");
}

    
})
window.addEventListener("scroll",function(){
if(this.window.scrollY>section2.offsetTop){
console.log("yes");

    const counters = document.querySelectorAll('.value');
    const speed = 200;
    
    
    counters.forEach( counter => {
       const animate = () => {
          const value = +counter.getAttribute('value');
          const data = +counter.innerText;
         
          const time = value / speed;
         if(data < value) {
              counter.innerText = Math.ceil(data + time);
              setTimeout(animate, 1);
            }else{
              counter.innerText = value;
            }
         
       }
       
       animate();
    });  
}
else{
    let counter=this.document.getElementsByClassName('value');
    counter.innerText="0";
}})
// counter animation 

