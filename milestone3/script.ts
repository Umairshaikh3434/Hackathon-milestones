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
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>email:</b>${email}</p>
    <p><b>phone:</b>${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>experiance</h3>
    <p>${experiance}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing.')
    }
});
