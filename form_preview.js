function updatePreview() {
    const previewContainer = document.getElementById('formPreview');
    previewContainer.innerHTML = '';

    const formTitle = document.getElementById('formTitle').value;
    const previewTitle = document.createElement('h2');
    previewTitle.innerText = formTitle;
    previewContainer.appendChild(previewTitle);

    questions.forEach(question => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question-preview';
        const questionText = document.createElement('p');
        questionText.innerText = question.question;
        questionElement.appendChild(questionText);

        if (question.type === 'checkbox' || question.type === 'dropdown') {
            const optionsList = document.createElement('ul');
            question.options.forEach(option => {
                const optionItem = document.createElement('li');
                optionItem.innerText = option;
                optionsList.appendChild(optionItem);
            });
            questionElement.appendChild(optionsList);
        }
        previewContainer.appendChild(questionElement);
    });
}
