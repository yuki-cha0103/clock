let si,x,y,seconds,minutes,hours;

function setup() {
  let can = createCanvas(400, 400);
  let id = document.getElementById('can');
  can.parent(id)

  let inp = document.getElementById('inp');
  angleMode(DEGREES)
}

function draw() {
  x = windowWidth;
  y = windowHeight;
  background(220);
  if(inp.value > 0 && si != inp.value){
    si = inp.value
    resizeCanvas(si,si)
  }
  if(si){
    draw2()
  }

  //angles
  seconds = second() * 6
  minutes = minute() * 6 + seconds / 60
  hours = hour() % 12 * 30 + minutes / 60
}

function draw2(){
  strokeWeight(si/200)
  ellipse(si/2,si/2,si,si)
  lines(hours,0.5,0.015)//hour
  lines(minutes,0.6,0.01)//minute
  stroke(100,200,100)
  lines(seconds,0.8,0.005)//secoond
  stroke(0,0,0)
  strokeWeight(si/50)
  point(si/2,si/2)

  strokeWeight(si/50)
  for(let i=0;i<12;i++){
    point(si/2+si/2*0.9*cos(i*30),si/2+si/2*0.9*sin(i*30))
  }
}

function lines(t,l,w){
  strokeWeight(si*w)
  line(si/2,si/2,si/2+si/2*l*cos(t-90),si/2+si/2*l*sin(t-90))
}