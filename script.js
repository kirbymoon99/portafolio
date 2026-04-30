document.querySelectorAll(".game").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.modal;
    const modal = document.getElementById(id);
    modal.showModal();
  });
});


document.querySelectorAll(".btnClose").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest("dialog").close();
  });
});

const skills = {
  vscode: {
    name: "VSCode",
    level: 75,
    logo: "img/skills/vsc.png",
    comment: "Mi editor de codigo por excelencia."
  },
  c: {
    name: "C",
    level: 80,
    logo: "img/skills/c.png",
    comment: "Mi primer acercamiento a la programacion y el primer lengueje que aprendi."
  },
  cpp: {
    name: "C++",
    level: 63,
    logo: "img/skills/c++.png",
    comment: "El primer lenjuage para la programacion orientada a objetos ademas de ser la base para las buenas practica de un programador."
  },
  python: {
    name: "Python",
    level: 55,
    logo: "img/skills/python.png",
    comment: "Manejo de lenguaje en un entorno mas de microcontroladores que para desarrollo web. <br> Manejo de librerias como pandas"
  },
  csharp: {
    name: "C#",
    level: 40,
    logo: "img/skills/csharp.png",
    comment: "Lengueje para el desarrollo de software y para .NET. <br> Creacion de web API'S"
  },
  javaScript: {
    name: "JavaScript",
    level: 65,
    logo: "img/skills/js.png",
    comment: "Conocimiento en manipulacion del DOM y fetch para consumo de API'S."
  },
  java: {
    name: "Java",
    level: 33,
    logo: "img/skills/java.png",
    comment: "Un lenguaje que recientemente estoy aprendiendo."
  },
  mathLab: {
    name: "Mathlab",
    level: 45,
    logo: "img/skills/mathlab.png",
    comment: "Codigo para analisis de datos y programacion de robots conplejos ademas de control PID. <br> Lo aprendi para un barazo robotico que necesitaba polinomios de bezier."
  },
  assembler: {
    name: "Ensamblador",
    level: 80,
    logo: "img/skills/ams.png",
    comment: "El lenguaje para microprocesadores. <br> Manejo arquitectura VonNewman y Harvard ademas de intrucciones RISC Y CISC."
  },
  html: {
    name: "HTML",
    level: 87,
    logo: "img/skills/html.png",
    comment: "Buen manejo de etiquetado de codigo."
  },
  css: {
    name: "CSS",
    level: 89,
    logo: "img/skills/css.png",
    comment: "Dominio de flexbox y grid ademas de escalabilidad de codigo."
  },
  node: {
    name: "Node.js",
    level: 59,
    logo: "img/skills/node.png",
    comment: "Mi backend preferido. <br> Conocimiento en Express para montaje de servidores y creacion de API'S RESTful en formato Json."
  },
  net: {
    name: ".NET",
    level: 35,
    logo: "img/skills/net.png",
    comment: "Aprendiendo recientemente pero con base solida en C#."
  },
  react: {
    name: "React",
    level: 32,
    logo: "img/skills/react.png",
    comment: "Aprendiendo recientemente."
  },
  sql: {
    name: "SQL Server",
    level: 80,
    logo: "img/skills/sqlserver.png",
    comment: "Experiencia en consultas complejas, triggers, job etc."
  },
  mysql: {
    name: "MySQL",
    level: 56,
    logo: "img/skills/mysql.png",
    comment: "Experiencia en consultas."
  },
  oracle: {
    name: "Oracle",
    level: 41,
    logo: "img/skills/oracle.png",
    comment: "Manejo de datos complejos."
  },
  access: {
    name: "Access",
    level: 42,
    logo: "img/skills/access.png",
    comment: "Creacion de formalario y bases de datos rapidas."
  },
  git: {
    name: "Git",
    level: 50,
    logo: "img/skills/git.png",
    comment: "Manjeo de comandos escenciales y creacion de ramas."
  },
  github: {
    name: "Github",
    level: 57,
    logo: "img/skills/github.png",
    comment: "  Experiencia en gestion de proyectos colaborativos."
  },
  unity: {
    name: "Unity",
    level: 61,
    logo: "img/skills/unity.png",
    comment: "Experiencia en la creacion de mapa tridimensional y programacion de agente."
  },
  blender: {
    name: "Blender",
    level: 53,
    logo: "img/skills/blender.png",
    comment: "Experiencia en mapeo UV."
  },
  plc: {
    name: "PLC",
    level: 84,
    logo: "img/skills/plc.png",
    comment: "Dominio de lenguaje ladder, FDB y SFC."
  },
  step7: {
    name: "STEP 7",
    level: 64,
    logo: "img/skills/step7.png",
    comment: "Experiencia para la programacion de PLC Siemens."
  },
  tiap: {
    name: "TIA Portal",
    level: 48,
    logo: "img/skills/tia.png",
    comment: "Experiencia para creacion de sistema SCADA."
  },
  arduino: {
    name: "IDE Arduino",
    level: 87,
    logo: "img/skills/arduino.png",
    comment: "Experiencia programando microcontroladores para la automatizacion de sistemas y de IoT."
  },
  motor: {
    name: "Motores Eléctricos",
    level: 60,
    logo: "img/skills/motor.png",
    comment: "Automatizacion de motores con variadores de frecuencia y PLC."
  },
  neumaticahidrahulica: {
    name: "Neumatica e Hidrahulica",
    level: 72,
    logo: "img/skills/neumatica.png",
    comment: "Experiencia en secuencias y creacion de sistemas automatizados."
  },
  electronica: {
    name: "Electronica",
    level: 81,
    logo: "img/skills/electronica.png",
    comment: "Creacion, mantenimiento y reparacion de placas de circuitos electronicos."
  },
  electrica: {
    name: "Electrica",
    level: 58,
    logo: "img/skills/electrica.png",
    comment: "Manipulacion de baja tension ademas de tener experiencia en montaje de centros de carga."
  },
  powerbi: {
    name: "Power BI",
    level: 39,
    logo: "img/skills/powerbi.png",
    comment: "Lo uso mas para presentar un analisis de datos formal."
  },
  solidworks: {
    name: "SolidWorks",
    level: 82,
    logo: "img/skills/solidworks.png",
    comment: "Conocimiento para pruebas mecánicas."
  },
  fusion: {
    name: "Autodek Fusion",
    level: 89,
    logo: "img/skills/fusion.png",
    comment: "Mi software de diseño mecánico preferido."
  },
  autoCAD: {
    name: "autoCAD",
    level: 46,
    logo: "img/skills/autoCAD.png",
    comment: "Software para la creacion de planos eléctricos y de control."
  },
  multisim: {
    name: "Multisim",
    level: 65,
    logo: "img/skills/multisim.png",
    comment: "Lo uso para pruebas electronicas."
  },
  proteus: {
    name: "Proteus",
    level: 57,
    logo: "img/skills/proteus.png",
    comment: "Conocimiento en creacion de placas electronicas."
  },
  office: {
    name: "Paqueteria Office",
    level: 85,
    logo: "img/skills/office.png",
    comment: "Manejo de todos los softwares de la paqueteria de office."
  },
  linux: {
    name: "Linux",
    level: 56,
    logo: "img/skills/linux.png",
    comment: "Mi editor de codigo por excelencia."
  },
  bash: {
    name: "Bash",
    level: 47,
    logo: "img/skills/bash.png",
    comment: "Mi editor de codigo por excelencia."
  },

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
    
  <h2 class="font-screen letter">¡Elije la habilidad!</h2>
    
    <br>
    <img src="${data.logo}" class="logo-screen">

    <p class="nombre letter">${data.name}</p>

    <div class="bar">
      <div class="level"></div>
    </div>

    <p class="letter let-screen">Nivel: ${data.level}/100</p>
    <p class="skill-grid letter let-screen">${data.comment}</p>
  </div>
`;

  setTimeout(() => {
    contenedor.querySelector(".level").style.width = data.level + "%";
  }, 100);
}