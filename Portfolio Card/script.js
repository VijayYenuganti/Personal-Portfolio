document.addEventListener("DOMContentLoaded", function () {
  // Get the buttons and forms
  const hireMeBtn = document.getElementById("hireMeBtn");
  const contactMeBtn = document.getElementById("contactMeBtn");
  const hireMeForm = document.getElementById("hireMeForm");
  const contactMeForm = document.getElementById("contactMeForm");
  const closeHireMeBtn = document.getElementById("closeHireMe");
  const closeContactMeBtn = document.getElementById("closeContactMe");

  // Function to open the form
  function openForm(form) {
    form.style.display = "flex";
  }

  // Function to close the form
  function closeForm(form) {
    form.style.display = "none";
  }

  // Event listeners for opening forms
  hireMeBtn.addEventListener("click", function () {
    openForm(hireMeForm);
  });

  contactMeBtn.addEventListener("click", function () {
    openForm(contactMeForm);
  });

  // Event listeners for closing forms
  closeHireMeBtn.addEventListener("click", function () {
    closeForm(hireMeForm);
  });

  closeContactMeBtn.addEventListener("click", function () {
    closeForm(contactMeForm);
  });

  // Close form when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === hireMeForm) {
      closeForm(hireMeForm);
    }
    if (event.target === contactMeForm) {
      closeForm(contactMeForm);
    }
  });
});

/*----- Send user details to your Email Java Script -----*/
/*----- Tip:- To work make smtp online ------*/
/*----- Watch Youtube channels ------*/
/* const HireMeForm = document.querySelector(".HIREME-Form");
const ContactMeForm = document.querySelector(".ContactMe-Form");

function HireMeEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

function ContactMeEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
} */
