var form = document.getElementById('resumeForm');
var resumePreview = document.getElementById('resumepreview');
var generateResumeBtn = document.getElementById('generateResume');
// interface editResumeData{
//     name:string;
//     email:string;
//     education:string;
//     profileSummary:string;
//     skills:string[];
//     experience:string;
// }
// function to generate resume preview
function generateResume(data) {
    resumePreview.innerHTML = "\n    \n    <h2>".concat(data.name, "</h2>\n    <p id=\"edid-name class=\"editable\">").concat(name, "</p>\n    <p><strong>Email</strong><span id =\"edit.email\" class=\"editable\">").concat(data.email, "</span></p>\n     <p><strong>Education</strong><span id =\"edit.education\" class=\"editable\">").concat(data.education, "</p>\n     <p><strong>ProfileSummary:</strong><span id =\"edit.profilesummary\" class=\"editable\">").concat(data.summary, "</p>\n      <p><strong>Skills</strong><span id =\"edit.skills\" class=\"editable\">").concat(data.skills.join(','), "</p>\n       <p><strong>Experience</strong><span id =\"edit.experience\" class=\"editable\">").concat(data.experience, "</p>\n         ");
    makeEditable();
}
generateResumeBtn.addEventListener('click', function () {
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        education: formData.get('education'),
        summary: formData.get('summary'),
        skills: formData.get('skills').split(',').map(function (skill) { return skill.trim(); }),
        experience: formData.get('experience'),
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
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
