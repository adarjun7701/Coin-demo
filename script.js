let coin = {
    state: 0,
    flip: function() {
        return this.state = Math.round(Math.random() * 1)
    },
    toString: function() {
        return this.state === 0 ? "Heads" : "Tails"
    },
    toHTML: function() {
        let image = document.createElement('img');
        image.src = this.state === 0 ? 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2006_Quarter_Proof.png/330px-2006_Quarter_Proof.png" : 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/2008_HI_Proof.png/800px-2008_HI_Proof.png"
        image.style.width = "300px"
        image.style.height = "300px"
        return document.body.append(image)
    }
};

function display20Flips(){
    for(let i=0; i<20; i++){
        let textBox = document.createElement('p')
        textBox.style.margin = "5px"
        coin.flip()
        textBox.append(coin.toString())
        document.body.append(textBox)
    }
    return console.log("Done Flipping")
}
function display20Images(){
    for(let i=0; i<20; i++){
        coin.flip()
        coin.toHTML()
    }
}