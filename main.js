var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie") {
        speak();
        console.log("Taking your selfie");
    }
}

 function speak() {
    var synthesis=window.speechSynthesis;
    var data="Taking your selfie 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(data);
    synthesis.speak(utterThis); 
    setTimeout(function(){
        snap();
        save();
    },5000);
 }

 Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
 });

 cam=document.getElementById("camera");
 Webcam.attach(cam);

 function snap() {
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML='<img id="selfie1" src="'+data_uri+'">';
    });
 }
function save() {
    link=document.getElementById("img");
    image=document.getElementById("selfie1").src;
    link.href=image;
    link.click();
}