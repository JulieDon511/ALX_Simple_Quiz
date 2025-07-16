function checkAnswer() {
    // Function body
    let correctAnswer = 4;
    const corrAns = document.querySelector(".quiz");
    const userAnswer= corrAns.input ;
    if(userAnswer == correctAnswer){
        corrAns.textContent ="correct! well done.";
    }else{
        corrAns.textContent="That's incorrect. Try again!";
    }

}