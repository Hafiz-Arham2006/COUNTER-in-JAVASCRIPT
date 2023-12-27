let count=0;
let incre=document.getElementById('increment')
let decre=document.getElementById('decrement')
let reset=document.getElementById('resetbtn')
incre.addEventListener('click',()=>{
    document.getElementById('number').innerText=
    count=count+1
})
decre.addEventListener('click',function(){
    document.getElementById('number').innerText=
    count=count-1
})
reset.addEventListener('click',()=>{
    document.getElementById('number').innerText=
    count=0
})