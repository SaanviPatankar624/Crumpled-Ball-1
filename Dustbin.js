class Dustbin{
   constructor(x, y, width, height){
       var options = {
           'isStatic': true
       }
       
       this.body1 = Bodies.rectangle(x, y, width, height, options);
       World.add(world, this.body1);

       this.body2 = Bodies.rectangle((x-(width/2)), (y-(height*2)), height, options);
       World.add(world, this.body2);

       this.body3 = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, options);
       World.add(world, this.body3);

       this.body1.width = width;
       this.body1.height = height;  
    }
    display(){
       fill("white");
       rect(this.body1.position.x, this.body1.position.y, this.body1.width, this.body1.height);
       rect(this.body2.position.x, this.body2.position.y, this.body2.width, this.body2.height);
       rect(this.body3.position.x, this.body3.position.y, this.body3.width, this.body3.height);
    }
}