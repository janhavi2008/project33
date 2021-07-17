class Snow2{
constructor(x,y){
    var options={
        friction:0.01,
        density:0.5
    }
    this.x=x
    this.y=y
    this.image=loadImage("snow4.webp")
this.snow=Bodies.circle(x,y,5,options)
World.add(world,this.snow)
}
display(){
    push()
    translate(this.snow.position.x,this.snow.position.y)
  //  rotate(this.body.angle)
imageMod(CENTER)
image(this.image,this.x,this.y,5,5)
pop()
}
}