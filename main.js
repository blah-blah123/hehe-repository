Webcam.set({
    width: 350,
height: 300,
img_format: 'png',
png_quality : 90
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="' + data_uri + '" >';
    });
};

console.log("ml5version" , ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JdKjTPYMZ/" , modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
    var synth=window.speechSynthesis;
    var utterThis=new SpeechSynthesisUtterance("testing the speech code... rum pum pum parey. rum rum pum pum parey! la la la ley la la la, lay lay!");
    synth.speak(utterThis);
}

speak();
