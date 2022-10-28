var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//yellow body//
ctx.shadowColor="black";
ctx.shadowBlur=15;
ctx.fillStyle="yellow"
ctx.fillRect(10,10,250,300)

//first eye
ctx.beginPath()
ctx.arc(90,100,40,0,2 * Math.PI)
ctx.fillStyle='white'
ctx.fill()
ctx.stroke()
  //blue
  ctx.beginPath()
ctx.arc(100,100,20,0,2 * Math.PI)
ctx.fillStyle='lightblue'
ctx.fill()
ctx.stroke() 
 //black
 ctx.beginPath()
 ctx.arc(100,100,10,0,2 * Math.PI)
 ctx.fillStyle='black'
 ctx.fill()
 ctx.stroke() 
//second eye
ctx.beginPath()
ctx.arc(170,100,40,0,2 * Math.PI)
ctx.fillStyle='white'
ctx.fill()
ctx.stroke() 
  //blue
  ctx.beginPath()
ctx.arc(160,100,20,0,2 * Math.PI)
ctx.fillStyle='lightblue'
ctx.fill()
ctx.stroke()
const time = new Date();
ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * 
time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);

  ctx.restore();
 //black
 ctx.beginPath()
 ctx.arc(160,100,10,0,2 * Math.PI)
 ctx.fillStyle='black'
 ctx.fill()
 ctx.stroke() 

 //smile
 ctx.beginPath()
 ctx.arc(125,0,170,45, 0.33*2 * Math.PI)

 ctx.stroke() 

 //teeth

 ctx.fillStyle="white"
 ctx.fillRect(130,170,20,25)
 

 ctx.fillStyle="white"
 ctx.fillRect(100,170,20,25)
 //5dodohh 
 ctx.beginPath()
 ctx.arc(50,130,15,2.8,0.2*2 * Math.PI)
 ctx.fillStyle='yellow'
 ctx.fill()
 ctx.strokeStyle='red'
 ctx.stroke() 

 ctx.beginPath()
 ctx.arc(200,130,15,14,0.03*2 * Math.PI)
 ctx.fillStyle='yellow'
 ctx.fill()
 ctx.strokeStyle='red'
 ctx.stroke() 




//white body
ctx.fillStyle=" beige"
ctx.fillRect(15,310,240,30)
//cravata first part left 
ctx.beginPath()
ctx.moveTo(80,310)
ctx.lineTo(100,335)
ctx.strokeStyle='black'
ctx.stroke()

ctx.beginPath()
ctx.moveTo(120,310)
ctx.lineTo(100,335)
ctx.stroke()
//carvata right part
ctx.beginPath()
ctx.moveTo(150,310)
ctx.lineTo(170,335)
ctx.strokeStyle='black'
ctx.stroke()

ctx.beginPath()
ctx.moveTo(190,310)
ctx.lineTo(170,335)
ctx.stroke()
//main carvata 
//left
ctx.beginPath()
ctx.moveTo(120,310)
ctx.lineTo(130,325)
ctx.stroke()
//main
ctx.beginPath()
ctx.moveTo(130,325)
ctx.lineTo(140,325)
ctx.stroke()
//right
ctx.beginPath()
ctx.moveTo(150,310)
ctx.lineTo(140,325)
ctx.strokeStyle='black'
ctx.stroke()

//bottom left
ctx.beginPath()
ctx.moveTo(130,325)
ctx.lineTo(120,340)
ctx.stroke() 


//bottom right
ctx.beginPath()
ctx.moveTo(140,325)
ctx.lineTo(150,340)
ctx.stroke()
//brwon body
ctx.fillStyle="brown"
ctx.fillRect(15,340,240,40)
  //small rect black 
  ctx.fillStyle="black" //1
  ctx.fillRect(20,345,40,15)
  ctx.fillStyle="black"   //2
  ctx.fillRect(80,345,40,15)
  ctx.fillStyle="black"  //3
  ctx.fillRect(150,345,40,15)
   ctx.fillStyle="black"  //4
  ctx.fillRect(210,345,40,15)
//remaining carvata
  ctx.beginPath()
ctx.moveTo(120,340)
ctx.lineTo(135,360)
ctx.stroke()
ctx.fillStrok="black"


ctx.beginPath()
ctx.moveTo(150,340)
ctx.lineTo(135,360)
ctx.stroke()

