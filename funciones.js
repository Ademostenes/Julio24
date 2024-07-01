const botonMenu = document.getElementById("inicioMov");
const restoMenu = document.getElementById("barraNav");

function cambiaMenu(){
    if (botonMenu.style.display == "none"){
        botonMenu.style.display = "flex";
        restoMenu.style.display = "none";
    } else {
        botonMenu.style.display = "none";
        restoMenu.style.display = "flex";
    }
}

/* Conexión a la base de datos MySQL (ejemplo con Axios)
const axios = require('axios');
const dbUrl = 'YOUR_DATABASE_URL';

// Función para recuperar las promociones
async function getPromotions() {
  const response = await axios.get(`${dbUrl}/promotions`);
  return response.data;
}

// Función para crear elementos del carrousel
function createPromotionElement(promotion) {
    const element = document.createElement('div');
    element.classList.add('carousel-item');
  
    const image = document.createElement('img');
    image.src = promotion.image;
    image.alt = promotion.title;
  
    const title = document.createElement('h3');
    title.textContent = promotion.title;
  
    const price = document.createElement('p');
    price.textContent = promotion.price;
  
    const link = document.createElement('a');
    link.href = promotion.destination;
    link.textContent = 'Ver más';
  
    element.appendChild(image);
    element.appendChild(title);
    element.appendChild(price);
    element.appendChild(link);

    return element;
  }

  // Inicialización del carrusel (ejemplo con Swiper)
const swiper = new Swiper('.carousel-inner', {
    slidesPerView: 3, // Cantidad de elementos visibles por slide
    spaceBetween: 20, // Espacio entre elementos
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button'
    }
  });*/
    
  function reconocerPage(){
      let page2 = document.getElementById("titulo").innerText;
      let boton;
      switch(page2) {
        case "Inicio":
          boton = document.getElementById("botInicio");
          boton.style.backgroundColor = "#ABBED6";
          break;
        case "Vuelos":
          boton = document.getElementById("botVuelos");
          boton.style.backgroundColor = "#ABBED6";
          break;
        case "Registro":
          boton = document.getElementById("botRegistro");
          boton.style.backgroundColor = "#ABBED6";
          break;
        case "Ingreso":
          boton = document.getElementById("botIngreso");
          boton.style.backgroundColor = "#ABBED6";
          break;
      }
    }

    reconocerPage();

    document.getElementById("findFrame").focus;
    document.getElementById("findFrame").click;
  