var aboutSection = document.getElementById ("about-section");
var skillsSection = document.getElementById ("skills-section");
var resumeSection = document.getElementById ("resume-section");
var workSection = document.getElementById ("work-section");

const menuLinks = document.querySelectorAll('.menu .menu-item')
menuLinks.forEach(el =>{
  el.addEventListener('click', function(){

    let sectionToGo = aboutSection;

    console.log(this);

    switch(this.id) {
      case 'skills': 
      sectionToGo = skillsSection;
      break;

      case 'resume': 
      sectionToGo = resumeSection;
      break;

      case 'work': 
      sectionToGo = workSection;
      break;

      // Role suavemente para a seção

    }
sectionToGo.scrollIntoView({behavior: 'smooth'})


  })
})