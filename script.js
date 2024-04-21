let userscore =0;
let compscore = 0;

const user =document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];
};
const drawgame = () => {
    msg.innerText = "Game was Draw !! Play again";
    msg.style.backgroundColor = "#081b31";
};
const showinner = (userwin, userchoice, compchoice) => {
        if(userwin) {
        userscore++;
        user.innerText = userscore;
        msg.innerText = `You Win!! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        } else {
        compscore++;
        comp.innerText = compscore;
        msg.innerText = `You Lose!! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
        }
};
const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice = ",compchoice);

    if(userchoice == compchoice){
        drawgame()
    } else {
        let userwin = true;
        if (userchoice == "rock"){
            userwin = compchoice=="paper"?false: true;
        }else if(userchoice == "paper"){
            userwin = compchoice =="scissor"?false : true;
        }else{
            userwin = compchoice=="rock"?false : true;
        }
        showinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
    playgame(userchoice);
    });
});