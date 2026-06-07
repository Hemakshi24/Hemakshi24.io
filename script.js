const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter ?? "all";

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    projectCards.forEach((card) => {
      const categories = card.dataset.category?.split(" ") ?? [];
      card.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});


const text = "Hemakshi";
const heading = document.querySelector(".hero h1");

heading.textContent = "";

let i = 0;

function type(){
    if(i < text.length){
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(type,150);
    }
}

type();