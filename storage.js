window.onload = function() {
    const formId = new URLSearchParams(window.location.search).get('form');
    if (formId) {
        const formData = JSON.parse(localStorage.getItem(formId));
        if (formData) {
            document.getElementById('formTitle').value = formData.title;
            questions = formData.questions;
            updatePreview();
            formData.questions.forEach((question, index) => addExistingQuestion(question, index));
        }
    }
}

function generateFormLink() {
    const formTitle = document.getElementById('formTitle').value;
    if (!formTitle || questions.length === 0) {
        alert('Please enter a title and at least one question.');
        return;
    }

    const formData = { title: formTitle, questions };
    const formId = Math.random().toString(36).substring(7);
    localStorage.setItem(formId, JSON.stringify(formData));
    document.getElementById('formLink').innerText = window.location.href + '?form=' + formId;
    document.getElementById('shareLink').style.display = 'block';
}
