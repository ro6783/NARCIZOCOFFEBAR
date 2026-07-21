/*
  EDITÁ ESTE ARCHIVO PARA CAMBIAR PRODUCTOS, DESCRIPCIONES Y PRECIOS.

  Podés agregar o quitar categorías y productos respetando la estructura.
*/

const MENU_DATA = {
  comidas: {
    title: "Carta de comidas",
    description: "Nuestra propuesta para almuerzos y cenas.",
    categories: [
      {
        name: "Entradas",
        items: [
          {
            name: "Entrada de la casa",
            description: "Reemplazar por la descripción real del plato.",
            price: "$0"
          },
          {
            name: "Langostinos rebozados",
            description: "Reemplazar por ingredientes y presentación.",
            price: "$0"
          }
        ]
      },
      {
        name: "Platos principales",
        items: [
          {
            name: "Plato principal",
            description: "Reemplazar por la descripción real.",
            price: "$0"
          },
          {
            name: "Raviolón de trucha",
            description: "Con salsa de langostinos.",
            price: "$0"
          }
        ]
      },
      {
        name: "Postres",
        items: [
          {
            name: "Crème brûlée",
            description: "Clásico postre de crema y caramelo.",
            price: "$0"
          }
        ]
      }
    ]
  },

  bebidas: {
    title: "Carta de bebidas",
    description: "Vinos, tragos, cervezas y bebidas sin alcohol.",
    categories: [
      {
        name: "Vinos",
        items: [
          {
            name: "Vino de la casa",
            description: "Indicar bodega, varietal y presentación.",
            price: "$0"
          }
        ]
      },
      {
        name: "Tragos",
        items: [
          {
            name: "Trago clásico",
            description: "Indicar ingredientes.",
            price: "$0"
          }
        ]
      },
      {
        name: "Sin alcohol",
        items: [
          {
            name: "Gaseosa",
            description: "Consultar variedades.",
            price: "$0"
          }
        ]
      }
    ]
  },

  desayunos: {
    title: "Desayunos y meriendas",
    description: "Cafetería, pastelería y opciones saladas.",
    categories: [
      {
        name: "Cafetería",
        items: [
          {
            name: "Café",
            description: "Elegí tu preparación favorita.",
            price: "$0"
          }
        ]
      },
      {
        name: "Dulces",
        items: [
          {
            name: "Porción de torta",
            description: "Consultar variedad disponible.",
            price: "$0"
          }
        ]
      },
      {
        name: "Salados",
        items: [
          {
            name: "Tostado",
            description: "Jamón y queso.",
            price: "$0"
          }
        ]
      }
    ]
  },

  sushi: {
    title: "Carta de sushi",
    description: "Disponible exclusivamente martes y jueves. Se recomienda reservar con anticipación.",
    categories: [
      {
        name: "Tablas",
        items: [
          {
            name: "Tabla de 24 piezas",
            description: "Selección de piezas de sushi.",
            price: "$0"
          },
          {
            name: "Tabla de 48 piezas",
            description: "Selección especial para compartir.",
            price: "$0"
          }
        ]
      },
      {
        name: "Entradas",
        items: [
          {
            name: "Langostinos rebozados",
            description: "Entrada ideal para compartir.",
            price: "$0"
          }
        ]
      }
    ]
  }
};
