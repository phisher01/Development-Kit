let user=prompt("Enter the max no");
let random=Math.floor(Math.random()*user)+1;
let guess=prompt("guess the no");

while(true){
    if(guess==random){
        console.log("Congratulaions!!");
        break;
    }
    else if(guess=="quit"){
        console.log("You quit");

        break;
    }
else {
        console.log("Wrong guess !Try again");
        guess=prompt("guess again");

    }


}