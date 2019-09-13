class Form {
constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greetings = createElement('h3');
}
hide(){
    this.greetings.hide();
    this.button.hide();
    this.input.hide();
}
display() {
this.title.html("multi gamer studio");
this.title.position(displayWidth / 2 - 50, 0);
this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
this.button.position(displayWidth / 2 + 30, displayHeight / 2);
this.button.mousePressed(()=> {
    this.input.hide();
    this.button.hide();
    player.name = this.name.value();
    playerCount += 1 ;
    player.index = playerCount ;
    player.update();
    player.updateCount(playerCount);
    this.greetings.html("hello" + player.name);
    this.greetings.position(displayWidth / 2 - 70, displayHeight / 4);
});
}
}