
function setup() {
    createCanvas(600,600);
    p = new Perceptron();
    //p.constructor;
    // var inputs = [-1,0.5];
    // guess = p.guess(inputs);
    // console.log(guess);
    
    pointslist= [];
    for (var i=0; i<100;i++){
      addtopoints();
    }

    
  }
function addtopoints(){
  z=new points;
  z.set_val();
  // console.log(z.x+" "+z.y);
  pointslist.push(z);
}
function draw(){
  background(255);
  stroke(0);
  line(0,0,295,600);
  for(var i=0;i<100;i++){
    // pointslist[i].show();
    input=[pointslist[i].x,pointslist[i].y];
    guess=p.guess(input);
    if(guess>0){
      stroke(0);
      fill(0);
    }else{
      stroke(0);
      fill(255);
    }
    ellipse(pointslist[i].x,pointslist[i].y,16,16);
    
    //console.log(i);
  }
  for(var i=0;i<100;i++){
    input=[pointslist[i].x,pointslist[i].y];
    p.train(input,pointslist[i].label);
    guess=p.guess(input);
    if(guess>0){
      stroke(0);
      fill(0);
    }else{
      stroke(0);
      fill(255);
    }
    ellipse(pointslist[i].x,pointslist[i].y,16,16);
  }

//    label=p.guess([mouseX, mouseY]);
// //  console.log("GUESS: "+ label)
//   if(label>0)
//   {
//     stroke(0);
//     fill(0);
//   }

//   else
//   {
//     stroke(200);
//     fill(200);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
  
}

function Perceptron(){
 this.weights= []; 
 this.lr=0.1;
//  do{this.weights[0]=random(-1,1)}while(this.weights[0]<-1||this.weights[0]>1);
//  do{this.weights[0]=random(-1,1)}while(this.weights[1]<-1||this.weights[1]>1);
  for (var  i=0; i<2; i++){
    this.weights.push(random(-1,1));
  //  console.log(this.weights);
  }
   this.guess=function(arguments){
    sum=0;
   for( var i=0; i<2; i++)
   {sum += arguments[i]*this.weights[i];  
  }
    output = this.sign(sum);
   return output;
 }
 this.sign= function(n){
   
  if (n>=0){
     return 1;
   }
     else{
       return -1;
       }
   }
   this.train= function(inputs,target){
    ans= this.guess(inputs);
    // console.log("test");
    console.log(ans);
    error= target-ans;
    if (error==0){
      return;
    }else {
    for(j=0;j<2;j++){
      this.weights[j]+=error*inputs[j]*0.1;
    }
    return ;}
   }
  }
function points(){
this.x;
this.y;
this.label;
  this.set_val=function()
  {
    this.x=random(600);
    this.y=random(600);
    if (this.x*2+10>this.y){
      this.label=1;
    }
    else {
      this.label=-1;
    }
  }
this.show=function(){
  stroke(0);
  if (this.label==1){
    fill(255);
   // console.log(i);
  }else {
    fill(0);
  }
  ellipse(this.x,this.y,8,8);
  // ellipse(x,y,8,8);
}
}

 



