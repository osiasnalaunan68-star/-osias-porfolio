// Example projects
const projects = [
  { name: "Portfolio Page", description: "My personal portfolio with HTML, CSS, JS." },
  { name: "Mini E-Commerce App", description: "Full-Stack project with React and Node.js." }
];

const projectList = document.getElementById("project-list");

// Add projects dynamically
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p>`;
  projectList.appendChild(card);
});

// Simulate contact form
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent! (simulation)");
});