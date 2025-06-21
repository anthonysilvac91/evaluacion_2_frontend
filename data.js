const data = {
  hamburguesas: [
    {
      titulo: "Hamburguesa Clásica",
      texto: "Receta casera con carne de res, lechuga y tomate.",
      tipo: "Receta",
      img: "./assets/doble.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Hamburguesa BBQ",
      texto: "Con salsa BBQ ahumada y cebolla caramelizada.",
      tipo: "Receta",
      img: "./assets/doble.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Burger Queen",
      texto: "Probada en Burger Queen, pan de papa y doble queso.",
      tipo: "Reseña",
      img: "./assets/doble.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Donde Carlitos",
      texto: "Local clásico en Ñuñoa con hamburguesas artesanales.",
      tipo: "Reseña",
      img: "./assets/doble.jpg",detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
  ],
  hotdog: [
    {
      titulo: "Hotdog al estilo gringo",
      texto: "Salchicha americana, queso cheddar y cebolla.",
      tipo: "Receta",
      img: "./assets/perro.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "El Completo de la Casa",
      texto: "Palta, mayo y chucrut, receta familiar.",
      tipo: "Receta",
      img: "./assets/perro.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "La Fuente",
      texto: "Probamos el completo gigante en Santiago Centro.",
      tipo: "Reseña",
      img: "./assets/perro.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Dog House",
      texto: "Local con toppings ilimitados, imperdible.",
      tipo: "Reseña",
      img: "./assets/perro.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
  ],
  pizza: [
    {
      titulo: "Pizza Margarita",
      texto: "Receta simple con albahaca fresca y mozzarella.",
      tipo: "Receta",
      img: "./assets/pizza.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Pizza Pepperoni Casera",
      texto: "Una base crocante y mucho pepperoni.",
      tipo: "Receta",
      img: "./assets/pizza.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Pizza Pronto",
      texto: "Una pizzería con masa madre y sabores únicos.",
      tipo: "Reseña",
      img: "./assets/pizza.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Da Giorgio",
      texto: "Local italiano con pizzas a la piedra en Providencia.",
      tipo: "Reseña",
      img: "./assets/pizza.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
  ],
  salsas: [
    {
      titulo: "Salsa Pomodoro",
      texto: "Clásica salsa italiana para pizzas o pastas.",
      tipo: "Receta",
      img: "./assets/salsa_pizza.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Salsa Picante Casera",
      texto: "Hecha con ají rojo, ajo y aceite de oliva.",
      tipo: "Receta",
      img: "./assets/salsa_pizza.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Salsoteca de Ñuñoa",
      texto: "Local que vende salsas artesanales con sabores únicos.",
      tipo: "Reseña",
      img: "./assets/salsa_pizza.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "La Sazón",
      texto: "Tienda de salsas ahumadas, dulces y picantes.",
      tipo: "Reseña",
      img: "./assets/salsa_pizza.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
  ],
  fastfood: [
    {
      titulo: "Tacos Express Caseros",
      texto: "Receta rápida con carne, guacamole y pico de gallo.",
      tipo: "Receta",
      img: "./assets/fast.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Papas Fritas con Queso",
      texto: "Perfectas para compartir en casa con amigos.",
      tipo: "Receta",
      img: "./assets/fast.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Fast & Good",
      texto: "Un local de comida rápida con opciones vegetarianas.",
      tipo: "Reseña",
      img: "./assets/fast.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Mr. Crunch",
      texto: "Sandwichería rápida con sabores internacionales.",
      tipo: "Reseña",
      img: "./assets/fast.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
  ],
  cafeteria: [
    {
      titulo: "Café de Vainilla y Canela",
      texto: "Receta fácil para preparar café especiado en casa.",
      tipo: "Receta",
      img: "./assets/cafeteria.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Tostadas Francesas",
      texto: "Desayuno ideal para acompañar con café.",
      tipo: "Receta",
      img: "./assets/cafeteria.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Café Nostalgia",
      texto: "Cafetería con ambiente vintage y gran variedad de granos.",
      tipo: "Reseña",
      img: "./assets/cafeteria.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      titulo: "Café del Parque",
      texto: "Ubicado frente al parque, ideal para tardes tranquilas.",
      tipo: "Reseña",
      img: "./assets/cafeteria.jpg",
      detalles:"loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }
  ]
};
