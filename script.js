// Dark Mode Toggle

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  toggleBtn.textContent = document.body.classList.contains("dark")

    ? "☀️ Light Mode"

    : "🌙 Dark Mode";

});

// Contact Form Validation

const form = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  if (name && email && message) {

    formMessage.textContent = "✅ Message Sent Successfully!";

    formMessage.style.color = "green";

    form.reset();

  } else {

    formMessage.textContent = "❌ Please fill all fields!";

    formMessage.style.color = "red";

  }

});