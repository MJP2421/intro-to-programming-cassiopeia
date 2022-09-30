const today = new Date();
console.log(today);
const thisYear = today.getFullYear();
console.log(thisYear);
const footer = document.querySelector("#footer");
const copyright = document.createElement("p");
 copyright.innerHTML = `Melanie ${thisYear}`;
 footer.appendChild(copyright);
const mySkills = ["JavaScript","Microsoft Word","Google Drive"];
const skillSection = document.querySelector("#skills");
const skillsList = skillSection.querySelector("ul");

for (let i = 0; i < mySkills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = mySkills[i];
    skillsList.appendChild(skill);
}