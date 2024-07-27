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
