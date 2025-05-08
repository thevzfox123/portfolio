const skills = [
  {
    icon: '<i class="bx bxl-html5"></i>',
    skill: 'HTML5'
  },
  {
    icon: '<i class="bx bxl-css3"></i>',
    skill: 'CSS3'
  },
  {
    icon: '<i class="bx bxl-javascript"></i>',
    skill: 'JavaScript'
  },
  {
    icon: '<i class="bx bxl-react"></i>',
    skill: 'React.js'
  },
  {
    icon: '<i class="fa-brands fa-git-alt"></i>',
    skill: 'Git & Version Control'
  },
  {
    icon: '<i class="bx bxl-sass"></i>',
    skill: 'SASS/SCSS'
  },
  {
    icon: '<i class="bx bxl-figma"></i>',
    skill: 'UI/UX Design (Figma)'
  },
  {
    icon: '<i class="fa-solid fa-mobile-screen-button"></i>',
    skill: 'Responsive Design'
  },
  {
    icon: '<i class="fa-solid fa-code"></i>',
    skill: 'Code Optimization'
  }
];


let skillSummaryHTML = ``;

skills.forEach((skillSet) => {



 skillSummaryHTML += `<div class="services-tab">
  <div class="service-icon">
    ${skillSet.icon}
  </div>

  <div class="service-name">
    <p>${skillSet.skill}</p>
  </div>
</div>
`

}) 

const skillRenderElement = document.querySelector('.services-grid')

skillRenderElement.innerHTML = skillSummaryHTML;