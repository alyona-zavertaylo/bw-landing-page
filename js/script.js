window.onload = function() {
  /*
    ========================================
   Scrollit.js
    ========================================
  */
 $(function() {
  $.scrollIt();
});
 /*
    ========================================
   AOS animation
    ========================================
  */
 AOS.init();
  /*
    ========================================
   Canvas animation
    ========================================
  */
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#484848" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.3551164387345227,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 176.3753266952075,
        color: "#666666",
        opacity: 0.12626362266116362,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 400.8530152163807,
          rotateY: 881.8766334760375
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  update = function() {
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  /*
    ========================================
   onscroll navigation
    ========================================
  */
  window.addEventListener("scroll", e => {
    let navigation = document.querySelector(".navigation");
    let intElemScrollTop = window.scrollY;
    let header = document.querySelector("header");
    let headerStyle = header.getBoundingClientRect();
    let headerHeight = headerStyle.height;
    if (intElemScrollTop >= headerHeight) {
      navigation.style.background = "rgb(255, 255, 255)";
      navigation.style.transition = "0.2s";
    }
    if (intElemScrollTop <= headerHeight) {
      navigation.style.background = "transparent";
    }
  });
  /*
    ========================================
   Menu panel
    ========================================
  */
  var menuPanel = document.querySelector(".menu-panel");

  document.querySelector(".menu-button").onclick = function() {
    openMobileMenu();
  };
  /*
      ========================================
     Menu panel exit
      ========================================
    */
  var navList = document.querySelectorAll(".navigation ul li");
  var exitMinMenu = document.querySelector(".exit-button");
  for (var i = 0; i < navList.length; i++) {
    navList[i].onclick = function() {
      closeMobileMenu();
    };
  }
  exitMinMenu.onclick = function() {
    closeMobileMenu();
  };

  function openMobileMenu() {
    menuPanel.style.display = "block";
    menuPanel.style.overflowY = "scroll";
    document.querySelector("body").style.overflow = "hidden";
  }

  function closeMobileMenu() {
    menuPanel.style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
  }
};

/*
  ========================================
  Valid phone
  ========================================
*/
function validName() {
  var regName = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
  var name = document.querySelector("#name");
  var valid = regName.test(name.value);
  var messageName = document.querySelector(".valid-name p");
  messageName.textContent = "";
  if (valid) {
    messageName.style.color = "green";
    messageName.innerHTML += "&#10003 Name is corect!";
  } else {
    messageName.style.color = "red";
    messageName.innerHTML += "&#10005 Name is not correct";
  }
  return valid;
}
function validMail() {
  var regMail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
  var email = document.querySelector("#email");
  var valid = regMail.test(email.value);
  var messageMail = document.querySelector(".valid-email p");
  messageMail.textContent = "";
  if (valid) {
    messageMail.style.color = "green";
    messageMail.innerHTML += "&#10003 Email is corect!";
  } else {
    messageMail.style.color = "red";
    messageMail.innerHTML += "&#10005 Email is not correct";
  }
  return valid;
}
function validNumber() {
  var regMail = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  var number = document.querySelector("#number");
  var valid = regMail.test(number.value);
  var messageNumber = document.querySelector(".valid-number p");
  messageNumber.textContent = "";
  if (valid) {
    messageNumber.style.color = "green";
    messageNumber.innerHTML += "&#10003 Number is corect!";
  } else {
    messageNumber.style.color = "red";
    messageNumber.innerHTML += "&#10005 Number is not correct";
  }
  return valid;
}

document.querySelector("input[type=button]").addEventListener('click', validMail);
document.querySelector("input[type=button]").addEventListener("click", validName);
document.querySelector("input[type=button]").addEventListener('click', validNumber);
 
document.querySelector("input[type=button]").addEventListener('click', () => {
  debugger;
  if(validMail() == true && validName() == true && validNumber() == true) {
    alert('Message sent');
    document.querySelector("#name").value = "";
    email.value = "";
    number.value = "";
  }
});