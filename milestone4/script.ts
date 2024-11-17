const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLFormElement).value
    const email = (document.getElementById('email') as HTMLFormElement).value
    const phone = (document.getElementById('phone') as HTMLFormElement).value
    const education = (document.getElementById('education') as HTMLFormElement).value
    const experiance = (document.getElementById('experiance') as HTMLFormElement).value
    const skills = (document.getElementById('Skills') as HTMLFormElement).value

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>email:</b><span contenteditable="true">${email}</span></p>
    <p><b>phone:</b><span contenteditable="true">${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>experiance</h3>
    <pcontenteditable="true">${experiance}</p>

    <h3>Skills</h3>
    <pcontenteditable="true">${skills}</p>
    `;

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing.')
    }
});
