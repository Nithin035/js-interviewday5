function change(){
    let x=document.getElementById("text")
    x.style.color="red"
    x.innerHTML="MERN"
}

//2Q
let b = document.querySelector("h2")
console.log(b)


const firstH1 = document.querySelector('h2');


if (firstH1) {
 
  console.log(firstH1.innerText);
} else {
  
  console.log('No H2 element found.');
}
//3Q
function time(){
    let dt=new Date();
    let hr=dt.getHours()
    let mi=dt.getMinutes()
    let si=dt.getSeconds()
    document.getElementById("hrs").innerText=hr;
    document.getElementById("mins").innerText=mi;
    document.getElementById("sec").innerText=si;
    setTimeout(time,1000)
}
time()

//4Q
function replace(){
   let c= document.getElementById("changetext");
   c.style.color="blue"
   c.innerText="hello welcome to elevation acadamey"
}

//5Q
function hidetext(){
    let d=document.getElementById("hide")
    if(d.style.direction==="none"){
        d.style.display="block"
    }else{
        d.style.display="none"
    }
}