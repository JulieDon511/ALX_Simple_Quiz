function checkAnswer() {
    // Function body
    let correctAnswer = 4;
    const corrAns = document.querySelector(".quiz");
    let userAnswer= selectedInput.value ;
    if(userAnswer === correctAnswer){
        corrAns.textContent ="correct! well done.";
    }else{
        corrAns.textContent="That's incorrect. Try again!";
    }

}