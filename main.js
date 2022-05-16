Webcam.set({
width:"300",
height:"350",
image_format : "png",
png_quality: 90
});
camera=document.getElementById("camera").value;
Webcam.attach("#camera")

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image'src="+ data_uri + ">"
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/o2hv3h-Sp/model.json",modelLoaded)
function modelLoaded() {
    console.log("Model Loaded !")
}

function check(){
    img = document.getElementById("result");
    classifier.classify(img, gotResults)
}
function gotResults(error,results){
    if(error){
    console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML=results[0].label
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}