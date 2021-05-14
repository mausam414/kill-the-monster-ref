class Supergirl extends BaseClass{
    constructor(x,y){
        this.image = loadImage("images/Supergirl.png");
        super(x,y);
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        super.display();

        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
        }

        

    }
}
