document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');
  const challenges = document.querySelectorAll('.challenge');

  // Function to collect and log the selected skill and challenge
  function collectData() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const github = document.getElementById('github').value;

    // Collect the selected skill level
    const selectedSkill = document.querySelector('.skill.selected');
    const skillLevel = selectedSkill ? selectedSkill.querySelector('.level').innerText : '';
    // Collect the selected challenge
    const selectedChallenge = document.querySelector('.challenge.selected')
    const challengeName = selectedChallenge ? selectedChallenge.querySelector('label').innerText : ''

    const reviewFullName = document.querySelector('.review-item.fn p:last-child');
    const reviewEmail = document.querySelector('.review-item.ea p:last-child');
    const reviewPhone = document.querySelector('.review-item.pn p:last-child');
    const reviewGithub = document.querySelector('.review-item.pg p:last-child');
    const reviewSkill = document.querySelector('.review-item.sl p:last-child');
    const reviewChallenge = document.querySelector('.review-item.cp p:last-child');
    if (reviewFullName) reviewFullName.innerHTML = fullName;
    if (reviewEmail) reviewEmail.innerHTML = email;
    if (reviewPhone) reviewPhone.innerHTML = phone;
    if (reviewGithub) reviewGithub.innerHTML = github;
    if (reviewSkill) reviewSkill.innerHTML = skillLevel;
    if (reviewChallenge) reviewChallenge.innerHTML = challengeName;

  }
  skills.forEach(skill => {
    skill.addEventListener('click', () => {
      skills.forEach(s => s.classList.remove('selected'));
      skill.classList.add('selected');
      collectData(); 
    });
  });

  
  challenges.forEach(challenge => {
    const checkbox = challenge.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('click', () => {
    challenges.forEach(c => {
        c.classList.remove('selected')
        c.querySelector('input[type="checkbox"').checked = false;
      })
     challenge.classList.add('selected')
     checkbox.checked = true;
      collectData(); 
    });
  });

  let currentTranslateX = 0;
  let currentStep = 1;
  const stepSec = document.querySelector('.step');
  const hr1 = document.querySelector('.hr1');
  const hr2 = document.querySelector('.hr2');
  const circles = document.querySelectorAll('.circle');
  const circleCheck = document.querySelectorAll('.circle-check')
  console.log(circleCheck)
  const lines = document.querySelectorAll('.line');
  const row = document.querySelector('.row');
  const nextBtn = document.querySelector('.next-btn');
  const gobackBtn = document.querySelector('.goback-btn');
  const forms = document.querySelectorAll('.row > div');
  const formWidth = 530;
  const checkMarkCircle = document.querySelector('.checkmark-circle');
  nextBtn.addEventListener('click', () => {
    if (currentTranslateX > -(forms.length - 1) * formWidth) {
      gobackBtn.style.display = 'block';
      if (currentStep === 3) {
        nextBtn.innerText = 'Submit';
        nextBtn.style.padding = '8px 26.9px';
      }
      currentTranslateX -= formWidth;
      row.style.transition = '0.4s ease-in-out';
      row.style.transform = `translateX(${currentTranslateX}px)`;
      currentStep++;
      switch (currentStep) {
        case 1:
          circles[0].classList.add('active');
        
          break;
        case 2:
          lines[0].classList.add('active');
          circles[0].style.color = "#fc6c4c"
          circleCheck[0].style.display = 'block'
          circleCheck[0].style.zIndex = '1'

          console.log(circleCheck[0])
          setTimeout(() => {
            circles[1].classList.add('active');
          }, 66);
          collectData();
          break;
        case 3:
           console.log(currentStep)
          circles[1].style.color = "#fc6c4c"
          circleCheck[1].style.display = 'block'
          circleCheck[1].style.zIndex = '1'

          lines[1].classList.add('active');
          setTimeout(() => {
            circles[2].classList.add('active');
          }, 66);
          break;
        case 4:
           console.log(currentStep)
          circles[2].style.color = "#fc6c4c"
          circleCheck[2].style.display = 'block'
          circleCheck[2].style.zIndex = '1'
          setTimeout(() => {
            circles[3].classList.add('active');
          }, 66);
          lines[2].classList.add('active');
          break;
        case 5:
          hr2.classList.add('hidden');
          stepSec.classList.add('hidden');
          hr1.classList.add('hidden');
          setTimeout(() => {
            checkMarkCircle.querySelector('.background').style.visibility = 'visible';
            checkMarkCircle.style.animation = 'LargerSize 1.2s forwards';
          }, 500);
          nextBtn.style.display = 'none';
          gobackBtn.style.display = 'none';
          break;
      }
    }
  });

  gobackBtn.addEventListener('click', () => {
    if (currentTranslateX < 0) {
      currentTranslateX += formWidth;
      row.style.transition = '0.25s ease-in-out';
      row.style.transform = `translateX(${currentTranslateX}px)`;
      currentStep--;
      if (currentStep === 1) {
        gobackBtn.style.display = 'none';
      }
      if (currentStep !== 5) {
        stepSec.classList.remove('hidden');
        hr1.classList.remove('hidden');
      }
      switch (currentStep) {
        case 4:
          hr2.classList.remove('hidden');
          break;
        case 3:
          setTimeout(() => {
            lines[2].classList.remove('active');
          }, 66);
          circles[3].classList.remove('active');
          break;
        case 2:
          setTimeout(() => {
            lines[1].classList.remove('active');
          }, 66);
          circles[2].classList.remove('active');
          break;
        case 1:
          setTimeout(() => {
            lines[0].classList.remove('active');
          }, 66);
          circles[1].classList.remove('active');
          break;
      }
    }
  });

  // Review information
  const review = document.querySelector('.review');
});
