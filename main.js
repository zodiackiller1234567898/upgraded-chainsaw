objects = [];
status = "";

function preload() {

}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 380, 380);
        if(status != "")
        {
          objectDetector.detect(video, gotResult);
          for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
  

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("text").value;
}

function modelLoaded()
{
    console.log("MODELlOaDeD");
    status = true;
}

function gotResult(error, results) { 
      if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
}
 
if(objects[i].label == object_name)
{
  video.stop();
  objectDetector.detect(gotResult);
  document.getElementById("object_status").innerHTML = object_name + " Found";

}
else
{
  document.getElementById("object_status").innerHTML = object_name + " Not Found";
}          
}
}
}
