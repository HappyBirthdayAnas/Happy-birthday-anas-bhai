window.onload = function () {

setTimeout(() => {
document.getElementById("loader").style.display = "none";
}, 2500);

const btn = document.getElementById("startBtn");
const surprise = document.getElementById("surprise");
const music = document.getElementById("music");

const message = `Happy Birthday! 🎉

Yaar sach bataun toh samajh nahi aa raha tha ke kya likhun, kyunke hamari dosti lafzon mein bayaan nahi ho sakti.

You are one of the most special people in my life.

Allah tumhe hamesha khush rakhe, kamyabi de aur hamari dosti hamesha aisi hi rahe.

❤️ Mera Bhai Tu Meri Jaan Hai ❤️

— From Ibrahim`;

btn.onclick = () => {

surprise.classList.remove("hidden");

music.play().catch(() => {});

typeWriter(message);

};

};

function typeWriter(text){

let i = 0;

const typing = document.getElementById("typing");

typing.innerHTML = "";

const timer = setInterval(()=>{

typing.innerHTML += text.charAt(i);

i++;

if(i >= text.length){

clearInterval(timer);

}

},40);

}

setInterval(()=>{

const heart = document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animation="float 6s linear";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),6000);

},500);
