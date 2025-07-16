const message = document.getElementById("message");
const content = document.getElementById("content");

// Show image after 3 seconds
setTimeout(() => {
  message.classList.add("hidden");
  content.classList.remove("hidden");
}, 3000);
