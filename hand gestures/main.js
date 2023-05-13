prediction_1=""

Webcam.set({
    width:350,
height:300,
image_format:'png',
png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML='<img id="snap" src="'+data_uri+'">'
        }
    )
}
console.log("ml5 version" , ml5.version)
classifier=ml5.classifier("https://teachablemachine.withgoogle.com/models/gjQng9of5/model.json",modalLoaded)

function modalLoaded(){
    console.log("modalLoaded")
}
function speak(){
    var synth=window.speechSynthesis
    speak_data1="The first Prediction is " + prediction_1

    var utterthis= new SpeechSynthesisUtterance(speak_data1)
    synth.speak(utterthis)
}
