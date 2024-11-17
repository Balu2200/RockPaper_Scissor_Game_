let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userscore_span = document.querySelector('#user-score');
const computerscore_span = document.querySelector('#computer-score');


const getcomputerchoice = () => {   // computer choice
    const options = ['rock', 'paper', 'scissors'];
    const randomnumber = Math.floor(Math.random() * 3);
    return options[randomnumber];
}
const playgame = (userchoice) => { // user choice

    console.log("User choice: " + userchoice);
    const computerchoice = getcomputerchoice();
    console.log("Computer choice: " + computerchoice);

    if(userchoice === computerchoice){
        console.log("It's a tie");
        msg.innerText = "It's a tie";
        msg.style.backgroundColor = "blue";
    }
    else{
        let userwin = true;
        if(userchoice ==='rock'){
            if(computerchoice === 'paper'){
                userwin = false;
            }
            else{
                userwin = true;
            }
        }
        else if(userchoice === 'paper'){
            if(computerchoice === 'scissors'){
                userwin = false;
            }
            else{
                userwin = true;
            }
        }
        else if(userchoice === 'scissors'){
            if(computerchoice === 'rock'){
                userwin = false;
            }
            else{
                userwin = true;
            }
        }
        if(userwin){
            userscore++;
            userscore_span.innerText = userscore;
            msg.innerText = "You wins!";
            msg.style.backgroundColor = "green";
        }
        else{
            computerscore++;
            computerscore_span.innerText = computerscore;
            msg.innerText = "You loose!";
            msg.style.backgroundColor = "red";
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});

