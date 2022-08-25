/*Summer Sexton
NEWM-N 320
August 25, 2022*/


class RandomPicker{
    
    //list of all the items to be selected from randomly
    constructor(items){
        this.items = items;
    }

    //function to return a randomm item
    pickRandom(){
        return this.items[Math.floor(Math.random() * this.items.length)];
    }
}


class FortuneCookie extends RandomPicker{
    outputElement
    constructor(element){
        super(["A faithful friend is a strong defense.","A fresh start will put you on your way.","A pleasant surprise is waiting for you.","Advice is like kissing. It costs nothing and is a pleasant thing to do.","All will go well with your new project."]);
        this.outputElement = element;
    }

    getFortune(){
        let reply = this.pickRandom();
        this.outputElement.innerHTML = reply;
    }

    newCookie(){
        this.outputElement.innerHTML = "Please open your cookie.";
    }
}

let myFortune = new FortuneCookie(document.getElementById("fortuneResponse"));

/*MagicEight example

class MagicEight extends RandomPicker{

    outputElement

    constructor(element){
        super(["It is certain","Ask again later","Perhaps","Very doubtful"]);
        this.outputElement = element;
    }

    shake(){
        let reply = this.pickRandom();
        this.outputElement.innerHTML = reply;
    }
}

let myEightBall = new MagicEight(document.getElementById("magicResponse"));
console.log(myEightBall.pickRandom());*/