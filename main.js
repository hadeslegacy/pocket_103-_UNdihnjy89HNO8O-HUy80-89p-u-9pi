Webcam.set({
    width: 351, 
    height: 301,
    image_format:"png" ,
    png_quality: 99 
});

cmra = document.getElementById("chamra")
Webcam.attach(cmra)

function onclicker(){
   Webcam.snap(function(data_uri){
       document.getElementById("resuultes").innerHTML = "<img id='total_image' src='" + data_uri + "'>"
   })
}

console.log(ml5.version)

classifier =  ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Y4PEjb5sY/" , model_trained)

function model_trained(){
    console.log("1234567890qwertyuiopasduilzxcvbnm")
}