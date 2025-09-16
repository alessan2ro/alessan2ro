// =====================
// Traducciones
// =====================
const translations = {
  es: {
    aboutTitle: "Sobre mí",
    aboutText: "Desarrollador con experiencia en aplicaciones móviles y backend. Apasionado por la creación de soluciones eficientes y escalables.",

    experienceTitle: "Experiencia Profesional",
    experienceJob: "Desarrollador Freelance / Independiente (2021 – Actualidad)",
    experienceList: [
      "Desarrollo de aplicaciones móviles en Android (Java) con arquitectura MVVM.",
      "Creación de clientes en Java para el consumo de servicios REST para proyectos personales.",
      "Publicación de proyectos en GitHub, Play Store y plataformas cubanas, alcanzando más de 30 mil descargas."
    ],

    skillsTitle: "Habilidades Técnicas",
    skillsList: [
      "Dominio de Java para desarrollo Android.",
      "Implementación de arquitecturas MVVM.",
      "Optimización de rendimiento en apps."
    ],

    projectsTitle: "Proyectos",
    project1Title: "Servicel",
    project1Text: "Aplicación móvil en Java para la gestión de servicios móviles de la Empresa de Telecomunicaciones de Cuba (Etecsa).",
    project2Title: "Apklis API",
    project2Text: "Cliente en Java para el consumo de servicios REST, implementado con Retrofit y Moshi, enfocado en la obtención de información de aplicaciones en la tienda, así como comprobación de compras de apps.",
    project3Title: "Divisas",
    project3Text: "Aplicación móvil en Java para la consulta de tasas de cambio no oficiales en Cuba, con funcionalidades de conversor, contar dinero de manera sencilla y guardar tarjetas de bancos cubanos.",
    project4Title: "Tasas de cambio",
    project4Text: "Web en HTML y JavaScript para la consulta de tasas de cambio no oficiales en Cuba, con funcionalidades de conversor."
  },
  en: {
    aboutTitle: "About Me",
    aboutText: "Developer with experience in mobile applications and backend. Passionate about creating efficient and scalable solutions.",

    experienceTitle: "Professional Experience",
    experienceJob: "Freelance / Independent Developer (2021 – Present)",
    experienceList: [
      "Development of Android mobile applications (Java) using MVVM architecture.",
      "Creation of Java clients for consuming REST services for personal projects.",
      "Published projects on GitHub, Play Store, and Cuban platforms, reaching over 30k downloads."
    ],

    skillsTitle: "Technical Skills",
    skillsList: [
      "Proficient in Java for Android development.",
      "Implementation of MVVM architectures.",
      "Performance optimization in apps."
    ],

    projectsTitle: "Projects",
    project1Title: "Servicel",
    project1Text: "Mobile application in Java for managing mobile services of the Cuban Telecommunications Company (Etecsa).",
    project2Title: "Apklis API",
    project2Text: "Java client for consuming REST services, implemented with Retrofit and Moshi, focused on retrieving app store information and verifying app purchases.",
    project3Title: "Divisas",
    project3Text: "Mobile application in Java for checking unofficial exchange rates in Cuba, with currency converter and bank card management features.",
    project4Title: "Exchange Rates",
    project4Text: "Website in HTML and JavaScript for consulting unofficial exchange rates in Cuba, with converter functionality."
  }
};

// =====================
// Función para actualizar textos
// =====================
function updateLanguage(lang) {
  // Sobre mí
  document.querySelector('#about h2').textContent = translations[lang].aboutTitle;
  document.querySelector('#about p').textContent = translations[lang].aboutText;

  // Experiencia
  document.querySelector('#experience h2').textContent = translations[lang].experienceTitle;
  document.querySelector('#experience h3').textContent = translations[lang].experienceJob;
  const expItems = document.querySelectorAll('#experience ul li');
  expItems.forEach((li, i) => li.textContent = translations[lang].experienceList[i]);

  // Habilidades
  document.querySelector('#skills h2').textContent = translations[lang].skillsTitle;
  const skillItems = document.querySelectorAll('#skills ul li');
  skillItems.forEach((li, i) => li.textContent = translations[lang].skillsList[i]);

  // Proyectos
  document.querySelector('#projects h2').textContent = translations[lang].projectsTitle;
  const projectHeaders = document.querySelectorAll('#projects h3');
  const projectParagraphs = document.querySelectorAll('#projects p');
  projectHeaders[0].textContent = translations[lang].project1Title;
  projectParagraphs[0].textContent = translations[lang].project1Text;
  projectHeaders[1].textContent = translations[lang].project2Title;
  projectParagraphs[1].textContent = translations[lang].project2Text;
  projectHeaders[2].textContent = translations[lang].project3Title;
  projectParagraphs[2].textContent = translations[lang].project3Text;
  projectHeaders[3].textContent = translations[lang].project4Title;
  projectParagraphs[3].textContent = translations[lang].project4Text;
}

// =====================
// Toggle de idioma
// =====================
const toggle = document.getElementById('langToggle');
const label = document.getElementById('langLabel');

toggle.addEventListener('change', () => {
  if(toggle.checked) {
    label.textContent = "EN";
    updateLanguage('en');
  } else {
    label.textContent = "ES";
    updateLanguage('es');
  }
});

// =====================
// Inicializar idioma por defecto
// =====================
updateLanguage('es');
