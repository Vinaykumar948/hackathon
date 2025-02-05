<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Forms Clone</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f4f4f9;
        }
        .container {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .form-title {
            font-size: 24px;
            margin-bottom: 20px;
        }
        .question {
            margin-bottom: 15px;
        }
        input, select, textarea {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }
        button:hover {
            background-color: #45a049;
        }
        .question-container {
            margin-bottom: 20px;
        }
        .share-link {
            margin-top: 10px;
            padding: 10px;
            background: #d3f4d3;
            border-radius: 4px;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Create a New Form</h2>

        <input type="text" id="formTitle" placeholder="Enter Form Title">

        <div id="questionsContainer">
            <!-- Questions will be added here dynamically -->
        </div>

        <button onclick="addQuestion()">➕ Add Question</button>
        <button onclick="generateFormLink()">✅ Generate Form Link</button>

        <div id="shareLink" class="share-link" style="display: none;">
            Share this form: <span id="formLink"></span>
        </div>
    </div>

    <div class="container" style="margin-top: 20px;">
        <h2>Submit a Form</h2>
        <input type="text" id="formURL" placeholder="Enter Form URL">
        <button onclick="loadForm()">📩 Load Form</button>

        <div id="formContent"></div>
    </div>

    <div class="container" style="margin-top: 20px;">
        <h2>View Responses</h2>
        <input type="text" id="responseURL" placeholder="Enter Form URL">
        <button onclick="viewResponses()">📊 View Responses</button>

        <div id="responseContent"></div>
    </div>

    <script>
        let questions = [];

        function addQuestion() {
            const questionId = questions.length;
            const newQuestion = {
                id: questionId,
                type: "text",
                question: ""
            };

            questions.push(newQuestion);

            const container = document.getElementById('questionsContainer');
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-container';
            questionDiv.innerHTML = `
                <input type="text" placeholder="Enter your question" oninput="updateQuestion(${questionId}, this.value)">
                <select onchange="updateType(${questionId}, this.value)">
                    <option value="text">Text</option>
                    <option value="radio">Multiple Choice</option>
                </select>
            `;
            container.appendChild(questionDiv);
        }

        function updateQuestion(id, value) {
            questions[id].question = value;
        }

        function updateType(id, type) {
            questions[id].type = type;
        }

        function generateFormLink() {
            const formTitle = document.getElementById('formTitle').value;
            if (!formTitle) {
                alert('Please enter a form title.');
                return;
            }

            const formData = {
                title: formTitle,
                questions: questions
            };

            // Simulating form link generation (would use backend in a real case)
            const formId = Math.random().toString(36).substring(7);
            localStorage.setItem(formId, JSON.stringify(formData));

            document.getElementById('formLink').innerText = window.location.href + '?form=' + formId;
            document.getElementById('shareLink').style.display = 'block';
        }

        function loadForm() {
            const url = document.getElementById('formURL').value;
            const formId = new URL(url).searchParams.get('form');
            const formData = JSON.parse(localStorage.getItem(formId));

            if (!formData) {
                alert('Invalid form link.');
                return;
            }

            let formHTML = `<h3>${formData.title}</h3>`;

            formData.questions.forEach((q, index) => {
                formHTML += `<div class="question"><label>${q.question}</label>`;
                if (q.type === 'text') {
                    formHTML += `<input type="text" id="answer${index}"></div>`;
                } else if (q.type === 'radio') {
                    formHTML += `
                        <label><input type="radio" name="q${index}" value="Option 1"> Option 1</label>
                        <label><input type="radio" name="q${index}" value="Option 2"> Option 2</label>
                    </div>`;
                }
            });

            formHTML += `<button onclick="submitForm('${formId}')">Submit</button>`;
            document.getElementById('formContent').innerHTML = formHTML;
        }

        function submitForm(formId) {
            const formData = JSON.parse(localStorage.getItem(formId));
            const answers = formData.questions.map((q, index) => {
                if (q.type === 'text') {
                    return document.getElementById('answer' + index).value;
                } else if (q.type === 'radio') {
                    const selected = document.querySelector(`input[name="q${index}"]:checked`);
                    return selected ? selected.value : "";
                }
            });

            const responseData = JSON.parse(localStorage.getItem(formId + "_responses")) || [];
            responseData.push(answers);
            localStorage.setItem(formId + "_responses", JSON.stringify(responseData));

            alert('Form submitted successfully!');
        }

        function viewResponses() {
            const url = document.getElementById('responseURL').value;
            const formId = new URL(url).searchParams.get('form');
            const responses = JSON.parse(localStorage.getItem(formId + "_responses")) || [];

            let responseHTML = `<h3>Responses</h3>`;
            responses.forEach((r, index) => {
                responseHTML += `<div><strong>Response ${index + 1}:</strong> ${r.join(', ')}</div>`;
            });

            document.getElementById('responseContent').innerHTML = responseHTML;
        }
    </script>

</body>
</html>