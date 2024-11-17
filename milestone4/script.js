var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('Skills').value;
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>experiance</h3>\n    <pcontenteditable=\"true\">").concat(experiance, "</p>\n\n    <h3>Skills</h3>\n    <pcontenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
