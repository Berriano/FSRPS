

function computerPlay(){

    let pcChoice = Math.round((Math.random)*3);

    switch (pcChoice) {

        case pcChoice = 0:
        return "rock";
        break;

        case pcChoice = 1:
        return "paper";
        break;

        case pcChoice = 2:
        return "scissors";
        break;

        default:"";

    }

}


