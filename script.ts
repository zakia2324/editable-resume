const form = document.getElementById('resumeForm')as HTMLFormElement;
const resumePreview=document.getElementById('resumepreview')as HTMLDivElement;
const generateResumeBtn=document.getElementById('generateResume') as HTMLButtonElement;
// const editResumeBtn=document.getElementById('editResume')as HTMLButtonElement;
// const editBtn=document.getElementById("edit-btn");

interface ResumeData{
    name:string;
    email:string;
    education:string;
    summary:string;
    skills:string[];
    experience:string;
}
// interface editResumeData{
//     name:string;
//     email:string;
//     education:string;
//     profileSummary:string;
//     skills:string[];
//     experience:string;
// }
// function to generate resume preview

function generateResume(data:ResumeData){
    resumePreview.innerHTML=`
    
    <h2>${data.name}</h2>
    <p id="edid-name class="editable">${name}</p>
    <p><strong>Email</strong><span id ="edit.email" class="editable">${data.email}</span></p>
     <p><strong>Education</strong><span id ="edit.education" class="editable">${data.education}</p>
     <p><strong>ProfileSummary:</strong><span id ="edit.profilesummary" class="editable">${data.summary}</p>
      <p><strong>Skills</strong><span id ="edit.skills" class="editable">${data.skills.join(',')}</p>
       <p><strong>Experience</strong><span id ="edit.experience" class="editable">${data.experience}</p>
         `;
         makeEditable();
}

generateResumeBtn.addEventListener('click',()=>
    {
    const formData = new FormData(form);
    
    const resumeData:ResumeData={
        name:formData.get('name')as string,
        email:formData.get('email')as string,
        education:formData.get('education')as string,
        summary:formData.get('summary')as string,
        skills:(formData.get('skills')as string).split(',').map(skill=>skill.trim()),
        experience:formData.get('experience')as string,
    };
    

    // generateResume(resumeData);
    
    
    generateResume(resumeData);
    
    // function editResume(){
    //     const editName=(document.getElementById("edit-name") as HTMLInputElement).value;
    // }
    
});
// function editResume(data:editResumeData){
//     resumePreview.innerHTML=`
//     <h2>${data.name}</h2>
//     <p><strong>Email</strong>${data.email}</p>
//      <p><strong>Education</strong>${data.education}</p>
//      <p><strong>ProfileSummary</strong>${data.profileSummary}</p>
//       <p><strong>Skills</strong>${data.skills.join(',')}</p>
//        <p><strong>Experience</strong>${data.experience}</p>
//          `;
// }
// editResumeBtn.addEventListener('click',()=>
//     {
//     const formData = new FormData(form);
//     const  editResumeData:editResumeData={
//         name:formData.get('name')as string,
//         email:formData.get('email')as string,
//         education:formData.get('education')as string,
//         profileSummary:formData.get('profileSummary')as string,
//         skills:(formData.get('skills')as string).split(',').map(skill=>skill.trim()),
//         experience:formData.get('experience')as string,
//     };

   
//     editResume(editResumeData);
    
// });
// const editBtn=document.getElementById("edit-btn");
// if(editBtn)editBtn.addEventListener("click,editResume");
// function editResume(){
//     const editName=(document.getElementById("edit-name") as HTMLInputElement).value;
// }
function makeEditable(){
    const editableElements=document.querySelectorAll('.editable');
    editableElements.forEach(element=>{
        element.addEventListener('click', function(){
            const currentElement=element as HTMLElement;
            const currentValue=currentElement.textContent ||"";

            if (currentElement.tagName==="p"||currentElement.tagName==='SPAN'){
                const input=document.createElement('input')
                input.type='text'
                input.value=currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur', function(){
                    currentElement.textContent=input.value;
                    currentElement.style.display='inline'
                    input.remove()
                })
                currentElement.style.display='none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
            }
        })
    })
}
