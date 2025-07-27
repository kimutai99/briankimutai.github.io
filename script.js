// Current year for copyright
document.getElementById('year').textContent = new Date().getFullYear();
    
// Tab functionality
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  for (let link of tablinks) {
    link.classList.remove("active-link");
  }
  for (let content of tabcontents) {
    content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Form submission
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(() => msg.innerHTML = "", 5000);
      form.reset();
    })
    .catch(error => {
      msg.innerHTML = "Error sending message. Please try again.";
      console.error('Error!', error.message);
    });
});