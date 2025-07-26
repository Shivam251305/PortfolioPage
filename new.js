// 🌐 Menu Toggle for Mobile Navigation
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x'); // If you're using Boxicons, otherwise remove this line
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ⌨️ Typing Animation with Typed.js
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Backend Developer', 'FullStack Developer', 'Web Designer.'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

// 🎤 Voice Control Integration
function startVoiceControl() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Speech Recognition not supported.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.start();

  recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase().trim();
    console.log("Voice Command:", command);

    // Navigation to sections
    if (command.includes("home")) document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
    else if (command.includes("about")) document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    else if (command.includes("services")) document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
    else if (command.includes("testimonial")) document.querySelector("#testimonial").scrollIntoView({ behavior: "smooth" });
    else if (command.includes("contact")) document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });

    // Trigger actions
    else if (command.includes("download cv")) document.querySelector(".btn[href='#']").click();
    else if (command.includes("send message")) document.querySelector(".contact input[type='submit']").click();

    // Clear contact form
    else if (command.includes("clear form") || command.includes("reset form")) {
      const inputs = document.querySelectorAll(".contact input, .contact textarea");
      inputs.forEach(input => input.value = "");
    }

    // Social links
    else if (command.includes("github")) window.open("https://github.com/Shivam251305", "_blank");
    else if (command.includes("linkedin")) window.open("https://www.linkedin.com/in/shivam-dhiman-0a8718306", "_blank");
    else if (command.includes("instagram")) window.open("https://www.instagram.com/the_shivam_dhiman_", "_blank");
    else if (command.includes("facebook")) window.open("https://m.facebook.com/lokesh.dhiman.587/", "_blank");
    else console.log("Unrecognized voice command:", command);
  };

  recognition.onerror = function(event) {
    console.error("Speech recognition error:", event.error);
  };
}