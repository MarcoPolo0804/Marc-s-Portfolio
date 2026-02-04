const content = document.getElementById("aboutContent");
const engineerBtn = document.getElementById("engineerBtn");
const humanBtn = document.getElementById("humanBtn");

const engineerContent = `
  <p>I’m a software engineer focused on building practical, user driven systems.
I care deeply about clarity, maintainability, and solving real problems not just shipping features.

I enjoy breaking complex ideas into simple components, thinking in systems, and improving things one iteration at a time.</p>
`;

const humanContent = `
  <p>I didn’t start in tech because it was trendy.
I started because I wanted to build something that mattered.

I’ve made mistakes, changed paths, and rebuilt myself more than once. That’s why I value consistency, discipline, and building things with intention, both in life and in software.</p>
`;

function switchContent(newContent) {
  content.classList.remove("show"); // fade out

  setTimeout(() => {
    content.innerHTML = newContent; // swap content
    content.classList.add("show");  // fade in
  }, 500);
}

engineerBtn.onclick = () => {
  switchContent(engineerContent);
  engineerBtn.classList.add("active");
  humanBtn.classList.remove("active");
};

humanBtn.onclick = () => {
  switchContent(humanContent);
  humanBtn.classList.add("active");
  engineerBtn.classList.remove("active");
};







