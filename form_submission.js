function submitForm() {
    const responses = [];
    questions.forEach((question, index) => {
        const response = {
            question: question.question,
            answer: document.querySelector(`#answer-${index}`)?.value || ''
        };
        responses.push(response);
    });

    localStorage.setItem('formResponses', JSON.stringify(responses));
    alert('Thank you for your responses!');
}
