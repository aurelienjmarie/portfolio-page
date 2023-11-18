document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul a");
  
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Verhindert das Standardverhalten des Links
  
        const targetId = link.getAttribute("href").substring(1); // Extrahiert die Ziel-ID
        const targetSection = document.getElementById(targetId); // Findet das Ziel-Element
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" }); // Scrollt zur Ziel-ID
        }
      });
    });
  });
  