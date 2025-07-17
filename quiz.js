function checkAnswer() {
    // Function body
    let correctAnswer ="4";
    const selectedInput = document.querySelector('input[name="quiz"]:checked');

    if(selectedInput){
        const userAnswer= selectedInput.value ;
        // getting the feedback under button
        const feedback = document.getElementById("feedback");
        if (userAnswer === correctAnswer){
        feedback.textContent ="Correct! Well done.";
    }else{
        feedback.textContent= "That's incorrect. Try again!";
    }
    }else{
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    }
    
}
// button 
    const btn = document.getElementById("submit-answer");
    btn.addEventListener("click", checkAnswer);
