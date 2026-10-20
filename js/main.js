/* =========================================================
   SARA NAGATY PORTFOLIO
   All editable links + project data live here.
   ========================================================= */

/* ---------------------------------------------------------
   1) SOCIAL / CONTACT LINKS
   Replace the values below with your real links.
   --------------------------------------------------------- */

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1Lx2qJ2gEN/",
  linkedin: "https://linkedin.com/in/sara-nagaty-58ab42385",
  github: "https://github.com/sekkacompany797-droid",
  email: "mailto:saranagaty41@gmail.com",
  whatsapp: "https://wa.me/201212451294"
};

/* ---------------------------------------------------------
   2) PROJECTS
   For every project:
   - github = source-code link
   - demo   = live Vercel link
   - image  = image inside assets/projects/

   IMPORTANT:
   The entire card is clickable and opens the live demo.
   --------------------------------------------------------- */

const PROJECTS = [
  {
    title: "New-Shop",
    category: "E-Commerce",
    description: "Modern e-commerce website with React & Tailwind CSS.",
    image: "assets/projects/new-shop.jpg",
    github: "https://github.com/sekkacompany797-droid/new-shop",
    demo: "https://new-shop.vercel.app"
  },
  {
    title: "Dashboard UI",
    category: "Dashboard",
    description: "Clean and modern dashboard interface with charts and analytics.",
    image: "assets/projects/dashboard.jpg",
    github: "https://github.com/sekkacompany797-droid/dashboard-ui",
    demo: "https://dashboard-ui.vercel.app"
  },
  {
    title: "Travel Landing Page",
    category: "Travel",
    description: "Responsive landing page with beautiful UI.",
    image: "assets/projects/travel.jpg",
    github: "https://github.com/sekkacompany797-droid/travel-landing-page",
    demo: "https://travel-landing-page.vercel.app"
  },
  {
    title: "Login-Sign Up",
    category: "Web App",
    description: "Modern and clean login page design.",
    image: "assets/projects/login.jpg",
    github: "https://github.com/sekkacompany797-droid/login-signup",
    demo: "https://login-signup.vercel.app"
  },
  {
    title: "Task Manager App",
    category: "Mobile App",
    description: "Simple and elegant task management mobile application.",
    image: "assets/projects/task-manager.jpg",
    github: "https://github.com/sekkacompany797-droid/task-manager",
    demo: "https://task-manager.vercel.app"
  },
  {
    title: "Portfolio Website",
    category: "Portfolio",
    description: "Personal portfolio website with smooth animations.",
    image: "assets/projects/portfolio.jpg",
    github: "https://github.com/sekkacompany797-droid/portfolio",
    demo: "https://portfolio.vercel.app"
  }
];

/* ---------------------------------------------------------
   Automatically connect social links to every location
   --------------------------------------------------------- */

function setLink(id, url) {
  const element = document.getElementById(id);
  if (element) element.href = url;
}

setLink("linkedinHero", SOCIAL_LINKS.linkedin);
setLink("githubHero", SOCIAL_LINKS.github);
setLink("facebookHero", SOCIAL_LINKS.facebook);
setLink("emailHero", SOCIAL_LINKS.email);

setLink("linkedinFooter", SOCIAL_LINKS.linkedin);
setLink("githubFooter", SOCIAL_LINKS.github);
setLink("facebookFooter", SOCIAL_LINKS.facebook);
setLink("emailFooter", SOCIAL_LINKS.email);

/* Contact button can use email directly */
setLink("contactButton", SOCIAL_LINKS.whatsapp);

/* ---------------------------------------------------------
   Render projects
   --------------------------------------------------------- */

const projectGrid = document.getElementById("projectGrid");

function projectCard(project) {
  return `
    <article
      class="project-card"
      tabindex="0"
      role="link"
      aria-label="Open ${project.title} live preview"
      data-demo="${project.demo}"
    >
      <div class="project-thumb">
        <img
          src="${project.image}"
          alt="${project.title} preview"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
        >
        <div class="project-placeholder" style="display:none;">
          ${project.title}
        </div>
        <div class="project-overlay"></div>
      </div>

      <div class="project-body">
        <span class="project-tag">${project.category}</span>
        <h4>${project.title}</h4>
        <p>${project.description}</p>

        <div class="project-links">
          <a
            href="${project.demo}"
            target="_blank"
            rel="noopener"
            onclick="event.stopPropagation()"
          >
            View Project →
          </a>

          <a
            href="${project.github}"
            target="_blank"
            rel="noopener"
            onclick="event.stopPropagation()"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  `;
}

projectGrid.innerHTML = PROJECTS.map(projectCard).join("");

/* ---------------------------------------------------------
   Whole card -> Vercel/live preview
   --------------------------------------------------------- */

document.querySelectorAll(".project-card").forEach(card => {
  const openDemo = () => {
    const url = card.dataset.demo;
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener");
    }
  };

  card.addEventListener("click", openDemo);

  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDemo();
    }
  });
});

/* ---------------------------------------------------------
   Mobile menu
   --------------------------------------------------------- */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

/* ---------------------------------------------------------
   Active navigation while scrolling
   --------------------------------------------------------- */

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      navItems.forEach(item => {
        item.classList.toggle(
          "active",
          item.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { threshold: 0.35 }
);

sections.forEach(section => observer.observe(section));
