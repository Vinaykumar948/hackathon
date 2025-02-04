let questions = [];

function addQuestion() {
    const questionId = questions.length;
    const newQuestion = { id: questionId, type: "text", question: "", options: [] };
    questions.push(newQuestion);

    const container = document.getElementById('questionsContainer');
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-container';
    questionDiv.innerHTML = `
        <input type="text" placeholder="Enter your question" oninput="updateQuestion(${questionId}, this.value)">
        <select onchange="updateType(${questionId}, this.value)">
            <option value="text">Short Answer</option>
            <option value="paragraph">Paragraph</option>
            <option value="checkbox">Checkboxes</option>
            <option value="dropdown">Dropdown</option>
            <option value="rating">Rating</option>
        </select>
        <div id="optionsContainer${questionId}"></div>
    `;
    container.appendChild(questionDiv);
    updatePreview();
}

function updateQuestion(id, value) {
    questions[id].question = value;
    updatePreview();
}

function updateType(id, type) {
    questions[id].type = type;
    const optionsContainer = document.getElementById(`optionsContainer${id}`);
    optionsContainer.innerHTML = '';

    if (type === 'checkbox' || type === 'dropdown') {
        optionsContainer.innerHTML = `<button onclick="addOption(${id})">Add Option</button>`;
    }
    updatePreview();
}

function addOption(id) {
    const optionId = questions[id].options.length;
    questions[id].options.push('');
    const optionsContainer = document.getElementById(`optionsContainer${id}`);
    const optionInput = document.createElement('input');
    optionInput.type = 'text';
    optionInput.placeholder = 'Enter option';
    optionInput.oninput = (e) => questions[id].options[optionId] = e.target.value;
    optionsContainer.appendChild(optionInput);
    updatePreview();
}
