naris_x=0;
naris_y=0;
fino_Y=0;
fino_X=0;
    function preload(){
        naris=loadImage("nareba.png");
        fino=loadImage("fino.png");
    }
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,carregou);
    posenet.on("pose",result);
}
function draw(){
    image(video,0,0,300,300);
    image(naris,naris_x,naris_y,25,25);
    image(fino,fino_X,fino_Y,80,35);
}
function foto(){
    save("tina.png");
}
function carregou(){
    console.log("posenet carregado");
}
function result(resultado){
    if(resultado.length>0){
        console.log(resultado)
    naris_x=resultado[0].pose.nose.x-10;
    naris_y=resultado[0].pose.nose.y-20;
    }
    if(resultado.length>0){
        console.log(resultado)
    fino_X=resultado[0].pose.nose.x-40;
    fino_Y=resultado[0].pose.nose.y+5;
    }
}