let ropas = [
    {
      nombre: "pantalon",
      categoria: "prenda inferior",
      precio: 100,
    },
    {
      nombre: "remera",
      categoria: "prenda superior",
      precio: 200,
    },
    {
      nombre: "medias",
      categoria: "pies",
      precio: 50,
    },
    {
        nombre: "buzo",
        categoria: "prenda superior",
        precio: 300,
      },
      {
        nombre: "campera",
        categoria: "prenda superior",
        precio: 500,
      },
  ];
  
  let persona = {};
  
  const esNumero = (numero) => {
    if (typeof numero === "string") {
      return !isNaN(numero);
    }
  };
  /**
   * Funcion para iniciar interaccion con el usuario
   * @returns el valor que el usuario haya escrito en el prompt
   */
  const llamarMenu = () => {
    return prompt(
      `Bienvenido a BrianPrendas!!
      Ejecute los siguientes comandos introduciendo el numero correspondiente
      1 - Agregar ropas
      2 - Eliminar ropas
      3 - Listar ropas
      4 - Listar categorias`,
      1
    );
  };
  
  /**
   * Funcion para cargar el objeto persona, solo acepta
   * personas mayores de 18
   * @param persona objeto que contiene nombre y edad
   * @returns un objeto persona
   */
  const crearPersona = (persona) => {
    const nombre = prompt("Ingrese su nombre: ");
    if (esNumero(nombre)) {
      alert("Ingrese un nombre valido");
      crearPersona(persona);
    }
    const edad = prompt("Ingrese su edad: ");
    if (!esNumero(edad)) {
      alert("Ingrese una edad valida");
      crearPersona(persona);
    }
    if (edad < 16) {
      alert("ingrese una edad mayor que 16");
      crearPersona(persona);
    }
    return (persona = {
      nombre,
      edad,
    });
  };
  
  /**
   * Funcion para agregar ropas al array de ropas
   * @param ropas array de objetos, el objeto se compone de
   * nombre, categoria y precio
   * @returns el array de ropas con la adicion de un elemento
   */
  const agregarRopa = (ropas) => {
    const nombre = prompt(`Ingrese el nombre de la prenda`);
    let nombreDuplicado = ropas.find((ropa) => {
      return nombre.toUpperCase() === ropa.nombre.toUpperCase();
    });
  
    if (nombreDuplicado) {
      alert("La prenda ya existe");
      agregarRopa(ropas);
    }
  
    const categoria = prompt(`Ingrese la categoria de la prenda`);
    let precio = prompt(`Ingrese el precio de la prenda sin simbolos`);
    if (!esNumero(precio)) {
      alert("Ingrese un precio valido");
      agregarRopa(ropas);
    }
    precio = Number(precio);
    return (ropas = [
      ...ropas,
      {
        nombre,
        categoria,
        precio,
      },
    ]);
  };
  
  /**
   * Funcion para agregar ropas al array de ropas
   * @param ropas array de objetos, el objeto se compone de
   * nombre, categoria y precio
   * @returns el array de ropas con la eliminacion de un elemento
   */
  const eliminarRopa = (ropas) => {
    const nombre = prompt(`Ingrese el nombre de la prenda`);
  
    return (ropas = ropas.filter((ropa) => {
      return ropa.nombre.toUpperCase() != nombre.toUpperCase();
    }));
  };
  
  /**
   * Funcion que lista en un alert() los ropas presentes
   * en el array de ropas
   * @param ropas array de objetos, el objeto se compone de
   * nombre, categoria y precio
   */
  const listarRopas = (ropas) => {
    let stringRopas = "Estos son todas las prendas en nuestro catalogo:\n";
    ropas.forEach((ropa) => {
      let precioConIva = ropa.precio + ropa.precio * 0.21;
      stringRopas +=
        "ropa: " + ropa.nombre + ", Precio (con IVA): $" + precioConIva + "\n";
    });
    alert(stringRopas);
  };
  
  /**
   * Funcion que lista en un alert() las categorias presentes
   * en el array de ropas
   * @param ropas array de objetos, el objeto se compone de
   * nombre, categoria y precio
   */
  const listarCategorias = (ropas) => {
    let stringRopas = "Estos son todas nuestras categorias:\n";
    let arrayCategorias = [];
    let categoriaDuplicada = false
    ropas.forEach((ropa) => {
      if(arrayCategorias.length !== 0){
        categoriaDuplicada = arrayCategorias.find((categoria) => {
          return categoria.toUpperCase() === ropa.categoria.toUpperCase();
        });
      }
      if (categoriaDuplicada) {
        arrayCategorias = [...arrayCategorias, ropa.categoria];
      } else {
        arrayCategorias = [...arrayCategorias, ropa.categoria];
        stringRopas += ropa.categoria + "\n";
      }
    });
    alert(stringRopas);
  };
  
  /**
   * Funcion que en base a la accion del usuario ejecuta diversas funciones
   * cuando el usuario ingresa una accion invalida se le informa de ello
   * la funcion siempre vuelve a pedir accion del usuario al finalizar
   * resultando en un loop sin salida, cosa que buscamos ya que no
   * tenemos forma en el documento de volverle a solicitar accion
   * como un boto por ejemplo.
   * @param respuestaMenu string que contine la accion
   * elegida por el usuario
   */
  const accionMenu = (respuestaMenu) => {
    switch (respuestaMenu) {
      case "1":
        ropas = agregarRopa(ropas);
        break;
      case "2":
        ropas = eliminarRopa(ropas);
        break;
      case "3":
        listarRopas(ropas);
        break;
      case "4":
        listarCategorias(ropas);
        break;
      default:
        alert("Codigo invalido");
    }
    respuestaMenu = llamarMenu();
    accionMenu(respuestaMenu);
  };
  
  //Pedimos cargar la persona al usuario
  persona = crearPersona(persona);
  
  //Pedimos que seleccione una accion
  let respuestaMenu = llamarMenu();
  
  //Actuamos en base a la accion del usuario
  accionMenu(respuestaMenu);