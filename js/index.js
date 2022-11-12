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
    
const messageForm= document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", (event) => {
event.preventDefault()
let name = event.target.name.value
let email = event.target.email.value
let message = event.target.message.value
console.log(name)
console.log(email)
console.log(message)
const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");
const newMessage = document.createElement("li")
newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span> `;

const removeButton = document.createElement("button");
removeButton.innerText = "remove"
removeButton.type = "button"
removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode
    entry.remove()
})
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);


messageForm.reset()

})