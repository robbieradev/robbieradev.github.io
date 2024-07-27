document.addEventListener("DOMContentLoaded", function() {
  console.log("Document is ready!");

  // Example of adding a new skill dynamically
  function addSkill(skillName) {
      const skillList = document.querySelector('#skills .skills');
      const newSkill = document.createElement('span');
      newSkill.textContent = skillName;
      skillList.appendChild(newSkill);
  }

  // Adding an example skill on page load
  addSkill('Example Skill');
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
