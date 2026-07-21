# Zahid Ullah — Personal Portfolio Website

 **Live Site:** [z-portfolio-website.netlify.app](https://z-portfolio-website.netlify.app/)

A personal portfolio website built with pure HTML, CSS, and Vanilla JavaScript — showcasing my projects, internship experience, technical skills, and community leadership as a Software Engineering student.

---

##  About

**Zahid Ullah**
Software Engineering Student | AI/ML & Web Developer
University of Mianwali — BS Software Engineering (Semester 6)
Khushab, Punjab, Pakistan

-  zahidullah9102@gmail.com
-  [LinkedIn](https://linkedin.com/in/zahid-ullah-067aa7283)
-  [GitHub](https://github.com/ZahidUllah46)
-  [Facebook](https://www.facebook.com/profile.php?id=61574067093906)

---

##  Features

- **Dark, developer-style theme** inspired by GitHub's color palette
- **Glassmorphism cards** with blur effects throughout
- **Typed.js** animated hero text cycling through roles
- **Particles.js** animated background in the hero section
- **Scroll-reveal animations** written from scratch using `IntersectionObserver`
- **Sticky navbar** with blur-on-scroll and active-link highlighting
- **Animated counters** for stats (internships, projects, blood donations, etc.)
- **Responsive timeline** for work experience
- **Contact form** with client-side validation and a success toast (no backend)
- Fully responsive — mobile, tablet, and desktop breakpoints
- Custom-styled scrollbar and smooth scrolling

---

##  Tech Stack

| Category | Details |
|---|---|
| Markup / Styling | HTML5, CSS3 (custom properties, Grid, Flexbox) |
| Scripting | Vanilla JavaScript (ES6+) |
| Animation libraries | [Typed.js](https://github.com/mattboldt/typed.js/), [Particles.js](https://vincentgarreau.com/particles.js/) |
| Icons | Font Awesome 6 |
| Fonts | Inter (body), Fira Code (mono/code) |
| Hosting | Netlify |

---

##  Project Structure

```
├── index.html      # All page sections (Hero, About, Skills, Projects, Experience, Contact, etc.)
├── style.css       # Design tokens, layout, animations, responsive breakpoints
├── script.js       # Typed.js/Particles.js init, scroll reveal, navbar, form validation, counters
└── README.md
```

---

##  Running Locally

No build tools or dependencies to install — it's plain HTML/CSS/JS.

1. Clone the repository:
   ```bash
   git clone https://github.com/ZahidUllah46/portfolio-website.git
   cd portfolio-website
   ```
2. Open `index.html` directly in your browser, **or** serve it locally:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

> An internet connection is required, since fonts, icons, and the Typed.js/Particles.js libraries load from CDNs.

---

##  Sections

1. Navbar
2. Hero (intro + typing animation)
3. About (bio, stats, quick info)
4. Tech Stack
5. Featured Projects
6. Experience & Internships (timeline)
7. Leadership & Community
8. Contact (form + social links)
9. Footer

---

##  License

This project is personal portfolio code shared for reference. Feel free to draw inspiration from it, but please don't republish it as your own.

---

Built with ❤️ by **Zahid Ullah**
