const skills = {
  arduino: {
    nombre: "IDE Arduino",
    nivel: 75,
    logo: "img/skills/arduino.png",
    comentario: "Experiencia programando microcontroladores y proyectos IoT."
  },
  motores: {
    nombre: "Motores Eléctricos",
    nivel: 60,
    logo: "img/skills/motor.png"
  }
};

const botones = document.querySelectorAll(".skill-li");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const skill = boton.dataset.skill;
    mostrarSkill(skill);
  });
});

function mostrarSkill(skill) {
  const data = skills[skill];

  const contenedor = document.getElementById("info-skill");

contenedor.innerHTML = `
  <div class="skill-container blink2">
    <img src="${data.logo}" class="logo">
    
    <div class="barra">
      <div class="nivel"></div>
    </div>
    <br>

    <p class="nombre letter">${data.nombre}</p>
    <p class="comentario letter">${data.comentario}</p>
  </div>
`;

  // Animación tipo "llenado"
  setTimeout(() => {
    contenedor.querySelector(".nivel").style.width = data.nivel + "%";
  }, 100);
}