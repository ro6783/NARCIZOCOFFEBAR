const MENU_DATA = {
  comidas: {
    title: "Carta de comidas",
    description: "Entradas, ensaladas, pizzas, pastas, sándwiches, milanesas, arroces, especiales, woks y postres.",
    categories: [
      { name: "Entradas", items: [
        { name: "Rabas a la romana con alioli", description: "", price: "$27.500" },
        { name: "Papas madrileñas", description: "", price: "$29.700" },
        { name: "Cazuela de langostinos al ajillo flambeado", description: "", price: "$23.100" },
        { name: "Mejillones a la provenzal", description: "", price: "$22.000" },
        { name: "Papas chips crujientes", description: "", price: "$22.000" }
      ]},
      { name: "Papas fritas", items: [
        { name: "Clásicas", description: "", price: "$13.200" },
        { name: "Cheddar, panceta y verdeo", description: "", price: "$22.000" },
        { name: "Huevo revuelto", description: "", price: "$20.000" },
        { name: "A la provenzal", description: "", price: "$20.000" }
      ]},
      { name: "Ensaladas y poke bowls", items: [
        { name: "Caesar pollo", description: "Lechuga, tomate cherry, crutones, queso parmesano, aderezo Caesar y pollo frito.", price: "$26.800" },
        { name: "Caesar langostinos", description: "Lechuga, tomate cherry, crutones, queso parmesano, aderezo Caesar y langostinos al ajillo.", price: "$34.000" },
        { name: "Mar y tierra", description: "", price: "$30.000" },
        { name: "Poke Bowl Mar y Tierra", description: "Arroz de sushi, langostinos al ajillo, queso crema, panceta ahumada crispy, palta, papa natural, maíz dulce, tomate cherry y sésamo.", price: "$34.500" },
        { name: "Poke Bowl Salmon Lover", description: "Arroz de sushi, salmón teriyaki, queso crema, palta, mango, rabanito, repollo morado y cebolla crispy.", price: "$35.000" }
      ]},
      { name: "Pizzas", items: [
        { name: "Mozzarella", description: "Salsa de tomate, mozzarella, aceitunas y orégano.", price: "$26.000" },
        { name: "Napolitana", description: "Salsa de tomate, mozzarella, jamón cocido, tomate en rodajas, provenzal fresco, aceitunas y orégano.", price: "$31.000" },
        { name: "Calabresa", description: "Salsa de tomate, mozzarella y cantimpalo.", price: "$30.700" },
        { name: "Especial", description: "Salsa de tomate, mozzarella, jamón, morrones, aceitunas y orégano.", price: "$31.000" },
        { name: "Americana", description: "Salsa de tomate, mozzarella, queso cheddar, panceta ahumada, huevo y aceitunas.", price: "$35.000" }
      ]},
      { name: "Pastas", items: [
        { name: "Fetuccini", description: "Elegí la salsa de tu preferencia.", price: "$11.000" },
        { name: "Tallarines al huevo", description: "Elegí la salsa de tu preferencia.", price: "$11.000" },
        { name: "Panzotti de cordero", description: "Elegí la salsa de tu preferencia.", price: "$26.400" },
        { name: "Panzotti de jamón y queso", description: "Elegí la salsa de tu preferencia.", price: "$19.000" },
        { name: "Raviol de espinaca", description: "Elegí la salsa de tu preferencia.", price: "$19.000" },
        { name: "Raviol de pollo y verdura", description: "Elegí la salsa de tu preferencia.", price: "$19.000" },
        { name: "Raviol de calabaza", description: "Elegí la salsa de tu preferencia.", price: "$12.300" },
        { name: "Raviol de centollón", description: "Elegí la salsa de tu preferencia.", price: "$26.400" },
        { name: "Ñoquis de papa", description: "Elegí la salsa de tu preferencia.", price: "$13.200" },
        { name: "Lasaña de carne y verdura", description: "", price: "$32.000" },
        { name: "Volcán de ñoquis", description: "", price: "$20.000" }
      ]},
      { name: "Salsas para pastas", items: [
        { name: "Filetto", description: "", price: "$8.500" },
        { name: "Bolognesa", description: "", price: "$14.000" },
        { name: "Aurora", description: "Salsa rosa con mejillones y brunoise de zucchini salteado.", price: "$18.200" },
        { name: "Salsa crema", description: "", price: "$8.500" },
        { name: "Verdeo y hongos", description: "", price: "$14.000" },
        { name: "Napolitana", description: "Tomate perita, ajo, albahaca y oliva.", price: "$18.200" }
      ]},
      { name: "Sándwiches", items: [
        { name: "Lomo jamón y queso", description: "Sale con papas fritas.", price: "$27.500" },
        { name: "Lomo Narcizo", description: "Carne, cebolla caramelizada, panceta ahumada crujiente, queso Tybo y mayonesa de zanahoria. Sale con papas fritas.", price: "$32.000" },
        { name: "Lomo completo", description: "Carne, jamón, queso, lechuga, tomate y huevo. Sale con papas fritas.", price: "$30.000" },
        { name: "Hamburguesa jamón y queso", description: "Sale con papas fritas.", price: "$19.800" },
        { name: "Hamburguesa cheddar, bacon y onions", description: "Sale con papas fritas.", price: "$29.700" },
        { name: "Hamburguesa completa", description: "Sale con papas fritas.", price: "$26.400" },
        { name: "Ave palta", description: "Pan árabe tostado, pollo a la plancha, palta y tomate. Sale con papas fritas.", price: "$24.800" }
      ]},
      { name: "Milanesas", items: [
        { name: "Milanesa sola", description: "Carne. Sale con fritas, ensalada o puré.", price: "$26.400" },
        { name: "Milanesa napolitana", description: "Carne. Sale con fritas, ensalada o puré.", price: "$31.300" },
        { name: "Milanesa piamontesa", description: "Carne, mozzarella, cebolla caramelizada y panceta ahumada. Sale con fritas, ensalada o puré.", price: "$34.500" },
        { name: "Suprema", description: "Pollo. Sale con fritas, ensalada o puré.", price: "$26.000" },
        { name: "Suprema napolitana", description: "Pollo. Sale con fritas, ensalada o puré.", price: "$31.000" },
        { name: "Suprema piamontesa", description: "Pollo, mozzarella, cebolla caramelizada y panceta ahumada. Sale con fritas, ensalada o puré.", price: "$31.400" }
      ]},
      { name: "Arroces", items: [
        { name: "Paella de frutos de mar", description: "Langostinos, mejillones, berberechos, anillos de calamar, pollo y cerdo.", price: "$50.000" },
        { name: "Risotto de hongos", description: "", price: "$32.000" },
        { name: "Risotto de mar", description: "", price: "$42.000" }
      ]},
      { name: "Especiales", items: [
        { name: "Pechuga francesa", description: "Con mostaza, zanahoria glaseada y tomillo.", price: "$37.000" },
        { name: "Ojo de bife", description: "Con papas cuña y verdura glaseada.", price: "$43.000" },
        { name: "Salmón a la plancha", description: "Con verduras glaseadas.", price: "$46.000" },
        { name: "Cerdo a la riojana", description: "Con papas españolas.", price: "$32.000" },
        { name: "Merluza al roquefort", description: "Con puré duquesa.", price: "$32.000" },
        { name: "Matambrito al limón", description: "Matambre de cerdo acompañado con papas españolas.", price: "$31.000" },
        { name: "Matambrito al roquefort con cebolla caramelizada", description: "Matambre de cerdo con cebollas caramelizadas, acompañado de papas españolas.", price: "$33.000" }
      ]},
      { name: "Woks", items: [
        { name: "Ternera y verdura", description: "", price: "$30.000" },
        { name: "Chow Mein de pollo", description: "Tallarines, pollo, verdura, salsa de piña, curry y crema.", price: "$30.500" },
        { name: "Chow Fun de langostinos", description: "Arroz, langostinos, verduras y salsa teriyaki.", price: "$32.000" }
      ]},
      { name: "Postres", items: [
        { name: "Flan casero", description: "", price: "$12.000" },
        { name: "Tiramisú", description: "", price: "$12.000" },
        { name: "Chocotorta", description: "", price: "$12.000" },
        { name: "Bocha de helado", description: "", price: "$3.300" },
        { name: "Arroz con leche", description: "", price: "$10.000" },
        { name: "Crème brûlée", description: "", price: "$12.000" }
      ]}
    ]
  },

  bebidas: {
    title: "Carta de bebidas",
    description: "Bebidas sin alcohol, limonadas, cervezas, tragos, gin tonic y whiskies.",
    categories: [
      { name: "Bebidas sin alcohol", items: [
        { name: "Gaseosas", description: "", price: "$4.200" },
        { name: "Agua local", description: "", price: "$3.200" },
        { name: "Agua sin/con gas", description: "", price: "$4.200" },
        { name: "Agua saborizada", description: "", price: "$4.200" },
        { name: "Exprimido de naranja", description: "", price: "$12.000" }
      ]},
      { name: "Limonadas", items: [
        { name: "Jarra de limonada de pepino", description: "", price: "$12.500" },
        { name: "Jarra de limonada de frutos rojos", description: "", price: "$14.000" },
        { name: "Jarra de limonada de frutilla y albahaca", description: "", price: "$14.000" },
        { name: "Vaso de limonada de pepino", description: "", price: "$5.500" },
        { name: "Vaso de limonada de frutos rojos", description: "", price: "$6.000" },
        { name: "Vaso de limonada de frutilla y albahaca", description: "", price: "$6.000" }
      ]},
      { name: "Cervezas", items: [
        { name: "Stella Artois", description: "", price: "$9.500" },
        { name: "Stella Noire", description: "", price: "$9.500" },
        { name: "Heineken 330 cc.", description: "", price: "$7.000" },
        { name: "Heineken 1 L.", description: "", price: "$15.000" },
        { name: "Corona 330 cc.", description: "", price: "$9.000" },
        { name: "Corona 710 cc.", description: "", price: "$16.000" }
      ]},
      { name: "Cervezas artesanales", items: [
        { name: "Antares Kölsch", description: "", price: "$9.000" },
        { name: "Antares Scotch", description: "", price: "$9.000" },
        { name: "Antares Porter", description: "", price: "$9.000" },
        { name: "Antares Honey", description: "", price: "$9.000" },
        { name: "Patagonia 24.7", description: "", price: "$15.500" },
        { name: "Patagonia Amber", description: "", price: "$15.500" },
        { name: "Patagonia Weisse", description: "", price: "$15.500" }
      ]},
      { name: "Tragos helados", items: [
        { name: "Lemon Champ", description: "Helado de limón y champagne.", price: "$12.000" },
        { name: "Narcizo", description: "Café espresso, helado de vainilla, tequila, licor de dulce de leche y crema montada.", price: "$12.000" },
        { name: "Bombón", description: "Helado de frutilla, ron, triple sec y crema.", price: "$12.000" },
        { name: "Deseo de Soltera", description: "Helado de americana, licor Baileys, frutos rojos y crema.", price: "$12.000" },
        { name: "Don Pedro", description: "Helado de americana, whisky y nuez.", price: "$12.000" },
        { name: "Margarita", description: "", price: "$12.000" },
        { name: "Daiquiri", description: "", price: "$12.000" }
      ]},
      { name: "Tragos combinados", items: [
        { name: "Fernet Cola", description: "", price: "$10.000" }, { name: "Cuba Libre", description: "", price: "$10.000" },
        { name: "Campari Orange", description: "", price: "$10.000" }, { name: "Destornillador", description: "", price: "$10.000" },
        { name: "Caipiriña", description: "", price: "$10.000" }, { name: "Caipiroska", description: "", price: "$10.000" },
        { name: "Mojito", description: "", price: "$10.000" }, { name: "Aperol Spritz", description: "", price: "$10.000" },
        { name: "Pisco Sour", description: "", price: "$10.000" }, { name: "Gancia Batido", description: "", price: "$10.000" },
        { name: "Cynar Julep", description: "", price: "$10.000" }, { name: "Vermout", description: "", price: "$10.000" },
        { name: "Jarra Pimms", description: "", price: "$10.000" }
      ]},
      { name: "Tragos clásicos", items: [
        { name: "Dry Martini", description: "", price: "$10.000" }, { name: "Sweet Martini", description: "", price: "$10.000" },
        { name: "Gibson Martini", description: "", price: "$10.000" }, { name: "Chocolate Martini", description: "", price: "$10.000" },
        { name: "Espresso Martini", description: "", price: "$10.000" }, { name: "Negroni", description: "", price: "$10.000" },
        { name: "Boulevardier", description: "", price: "$10.000" }, { name: "Whisky Sour", description: "", price: "$10.000" },
        { name: "Ahumado", description: "", price: "$10.000" }
      ]},
      { name: "Gin tonic", items: [
        { name: "Gin frutos rojos", description: "", price: "$10.000" }, { name: "Gin pepino y limón", description: "", price: "$10.000" },
        { name: "Gin limón", description: "", price: "$10.000" }, { name: "Gin naranja y canela", description: "", price: "$10.000" },
        { name: "Gin bitter", description: "", price: "$10.000" }, { name: "Gin pomelo y romero", description: "", price: "$10.000" }
      ]},
      { name: "Medidas", items: [
        { name: "Tequila, limón y sal", description: "", price: "$9.000" },
        { name: "Baileys", description: "", price: "$9.000" }
      ]},
      { name: "Whiskies", items: [
        { name: "Ballantine's 12 años", description: "", price: "$10.000" },
        { name: "J&B 12 años", description: "", price: "$10.000" },
        { name: "Johnnie Walker Red Label", description: "", price: "$8.000" },
        { name: "Johnnie Walker Black Label", description: "", price: "$12.000" },
        { name: "Johnnie Walker Gold Label", description: "", price: "$12.000" },
        { name: "Johnnie Walker Blue Label", description: "", price: "$110.000" },
        { name: "Johnnie Walker Platinum Label", description: "", price: "$80.000" },
        { name: "Chivas Regal 12 años", description: "", price: "$16.000" },
        { name: "Jack Daniel's", description: "", price: "$15.000" },
        { name: "Gentleman", description: "", price: "$41.000" },
        { name: "Swing", description: "", price: "$25.000" }
      ]}
    ]
  },

  desayunos: {
    title: "Desayunos y meriendas",
    description: "Cafés, infusiones, especiales, opciones dulces y saladas.",
    categories: [
      { name: "Cafés e infusiones", items: [
        { name: "Café", description: "", price: "$3.800" }, { name: "Café americano", description: "", price: "$4.400" },
        { name: "Café doble", description: "", price: "$5.400" }, { name: "Café con leche", description: "", price: "$5.600" },
        { name: "Latte", description: "Vainilla, caramelo, amaretti o avellanas.", price: "$5.900" },
        { name: "Cappuccino italiano", description: "", price: "$7.100" }, { name: "Submarino", description: "", price: "$5.900" },
        { name: "Vaso de leche", description: "", price: "$3.300" }, { name: "Té", description: "", price: "$3.000" }
      ]},
      { name: "Cereales", items: [
        { name: "Bowl chico", description: "Precio no indicado en el PDF.", price: "Consultar" },
        { name: "Bowl grande", description: "Precio no indicado en el PDF.", price: "Consultar" }
      ]},
      { name: "Especiales calientes", items: [
        { name: "Calipso", description: "Espresso, Tía María, crema y chocolate rallado.", price: "$7.800" },
        { name: "Irlandés", description: "Espresso, whisky, crema y canela.", price: "$7.800" },
        { name: "Ruso", description: "Espresso, vodka, crema y chocolate rallado.", price: "$7.800" },
        { name: "Cubano", description: "Espresso, ron, crema y chocolate rallado.", price: "$7.800" },
        { name: "Bombón", description: "Espresso, licor Baileys, crema, dulce de leche, chocolate rallado y crocante de almendras.", price: "$7.800" },
        { name: "Narcizo", description: "Espresso, licor de dulce de leche, crema y chocolate rallado.", price: "$7.800" },
        { name: "Chocolate Narcizo", description: "Chocolate, dulce de leche, crema y chocolate rallado.", price: "$7.800" }
      ]},
      { name: "Especiales fríos", items: [
        { name: "Frappuccino", description: "Vainilla, caramelo, amaretti o avellanas.", price: "$7.800" },
        { name: "Licuado con leche", description: "", price: "$8.200" },
        { name: "Licuado con agua", description: "", price: "$7.300" },
        { name: "Milkshake", description: "", price: "$8.200" }
      ]},
      { name: "Adicionales", items: [
        { name: "Copa de jugo de naranja", description: "", price: "$6.800" },
        { name: "Crema Chantilly", description: "", price: "$2.600" }
      ]},
      { name: "Salados", items: [
        { name: "Tostado de pan de campo", description: "Pan de campo con manteca, jamón y queso.", price: "$14.300" },
        { name: "Sándwich veggie", description: "Pan de campo gratinado con queso, relleno de guacamole, queso crema, tomates cherry y rúcula.", price: "$18.700" },
        { name: "Tostado clásico", description: "Jamón y queso.", price: "$12.000" },
        { name: "Tostado primavera", description: "Jamón, queso, lechuga, tomate y huevo.", price: "$14.000" },
        { name: "Huevos revueltos", description: "", price: "$8.000" }
      ]},
      { name: "Dulces", items: [
        { name: "Pancakes", description: "", price: "$10.000" }, { name: "Tortas", description: "", price: "$12.000" },
        { name: "Medialunas", description: "", price: "$1.900" }, { name: "Medialunas de jamón y queso", description: "", price: "$4.100" },
        { name: "Alfajores", description: "", price: "$3.600" }, { name: "Tostadas con queso y mermelada", description: "", price: "$7.900" }
      ]},
      { name: "Meriendas con infusión", items: [
        { name: "Dulce Narcizo", description: "Pancakes con crema, dulce de leche, helado y sirope, más cappuccino.", price: "$20.000" },
        { name: "Avocado Toast", description: "Tostada con palta, huevo poché, rúcula y tomate cherry, más café o infusión.", price: "$20.000" },
        { name: "Clásico", description: "Porción de tostadas con queso crema y mermelada, más café o infusión.", price: "$12.100" },
        { name: "Popular Narcizo", description: "Tres medialunas, más café o infusión.", price: "$10.100" },
        { name: "Americano", description: "Huevos revueltos, guacamole, jamón cocido, queso, dos medialunas, dos copas de jugo de naranja, tostadas, queso crema y mermelada, más dos cafés o infusiones.", price: "$32.000" }
      ]}
    ]
  },

  sushi: {
    title: "Carta de sushi",
    description: "Disponible exclusivamente martes y jueves. Reservas con anticipación.",
    categories: [
      { name: "Carta pendiente", items: [
        { name: "Próximamente", description: "El PDF enviado no incluye productos ni precios de sushi.", price: "Consultar" }
      ]}
    ]
  }
};
