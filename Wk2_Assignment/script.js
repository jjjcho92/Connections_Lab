console.log("Page is loaded!");

let currentNum = 0;

// steps

// 1. identify and select the button

let theAnswer = document.getElementById("the-answer");
console.log(theAnswer);


// 2. listen to event click on the button

// button.addEventListener("click", increaseCounter);

// 3. increase the counter number


theAnswer.addEventListener('click', function(){
    console.log("Answer was pressed!");
    let theNumber = document.getElementById("the-number");
    console.log(theNumber);
    currentNum = currentNum + 1;
    theNumber.innerHTML = currentNum;
    document.body.style.background = "green";
});


let WrongAnswer = document.getElementById("wrong");
WrongAnswer.addEventListener('click', function(){
    document.body.style.background = "red";
})