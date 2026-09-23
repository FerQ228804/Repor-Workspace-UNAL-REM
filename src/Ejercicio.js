// EJERCICIO DE CREACIÓN DE OBJETOS PARA NODEJS

const celular = {
  marca: "Poco",
  modelo: "Poco F8 Pro",
  color: "Gris espacial",
  almacenamiento: "1TB",
  ram: "16GB",
  precio: 4000000,
  disponioble: true,

  mostrarInfo: function () {
    console.log("\n*** INFORMACIÓN DEL MÓVIL ***\n");
    console.log("Marca:", this.marca);
    console.log("Modelo:", this.modelo);
    console.log("Color:", this.color);
    console.log("Almacenamiento:", this.almacenamiento);
    console.log("RAM:", this.ram);
    console.log(
      "Precio:",
      this.precio.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      }),
    );
    console.log("Disponible:", this.disponioble ? "Sí" : "No");
  },
};

celular.mostrarInfo();

// EJERCICIO DE CREACIÓN DEL OBJETO AUTOMOVIL

const automovil = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  color: "Rojo",
  motor: "1.8L",
  kilometraje: 15000,

  encender: function () {
    console.log("\n*** El automóvil está encendido. ***");
  },

  mostrarInformacion: function () {
    console.log("*** INFORMACIÓN DEL AUTOMÓVIL ***\n");
    console.log("Marca:", this.marca);
    console.log("Modelo:", this.modelo);
    console.log("Año:", this.año);
    console.log("Color:", this.color);
    console.log("Motor:", this.motor);
    console.log("Kilometraje:", this.kilometraje, "km");
  },
};

automovil.encender();
automovil.mostrarInformacion();

// EJERCICIO DE CREACIÓN DEL OBJETO ESTUDIANTE

const estudiante = {
  nombre: "Juan Francisco Perez",
  edad: 20,
  programa: "Análisis y desarrollo de software",
  ficha: "3186687",
  nota1: 8,
  nota2: 9,
  nota3: 8.5,

  calcularPromedio: function () {
    const promedio = (this.nota1 + this.nota2 + this.nota3) / 3;
    return promedio.toFixed(2);
  },

  informacionEstudiante: function () {
    console.log("\n*** INFOMACIÓN DEL ESTUDIANTE ***\n");
    console.log("Nombre:", this.nombre);
    console.log("Edad:", this.edad);
    console.log("Programa:", this.programa);
    console.log("Ficha:", this.ficha);
    console.log("Promedio de notas:", this.calcularPromedio());
  },
};

estudiante.informacionEstudiante();

// EJERCICIO DE CREACIÓN DEL OBJETO CUENTA BANCARIA

const cuenta = {
  titular: "Juan Francisco Perez",
  numeroCuenta: "1234567890",
  saldo: 500000,
  tipoCuenta: "Ahorros",

  formatoMoneda: function (cantidad) {
    return cantidad.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  },

  mostrarSaldo: function () {
    console.log("\n*** INFORMACIÓN DE LA CUENTA BANCARIA ***\n");
    console.log("Titular:", this.titular);
    console.log("Número de cuenta:", this.numeroCuenta);
    console.log("Saldo:", this.formatoMoneda(this.saldo));
    console.log("Tipo de cuenta:", this.tipoCuenta);
  },

  depositar: function (cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log(
        `Se ha depositado ${this.formatoMoneda(cantidad)} en la cuenta: ${this.numeroCuenta}. \nNuevo saldo: ${this.formatoMoneda(this.saldo)}`,
      );
    } else {
      console.log(
        "La cantidad a depositar debe ser mayor a cero o es un monto invalido.",
      );
    }
  },

  retirar: function (cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(
        `Se ha retirado ${this.formatoMoneda(cantidad)} de la cuenta: ${this.numeroCuenta}. \nNuevo saldo: ${this.formatoMoneda(this.saldo)}`,
      );
    } else {
      console.log("La cantidad a retirar excede el saldo disponible.");
    }
  },
};

cuenta.mostrarSaldo();
cuenta.depositar(200000);
cuenta.retirar(100000);

// EJERCICIO DE CREACIÓN DEL OBJETO PARQUEADERO

const parqueadero = {
  numero: "P-001",
  tipo: "Auto",
  placa: "ABC123",
  capacidadTotal: 30,
  espaciosOcupados: 0,
  tarifaHora: 2500,
  horasGratis: 2,
  ocupado: false,

  formatoMoneda: function (cantidad) {
    return cantidad.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  },

  crearFechaDesdeHora: function (horaTexto) {
    const [hora, periodo] = horaTexto.split(" ");
    let [horas, minutos] = hora.split(":").map(Number);

    if (periodo === "PM" && horas !== 12) horas += 12;
    if (periodo === "AM" && horas === 12) horas = 0;

    const fecha = new Date();
    fecha.setHours(horas, minutos, 0, 0);
    return fecha;
  },

  mostrarInformacion: function () {
    console.log("\n*** INFORMACIÓN DEL PARQUEADERO ***\n");
    console.log("Número de parqueadero:", this.numero);
    console.log("Tipo de vehículo:", this.tipo);
    console.log("Placa:", this.placa);
    console.log("Ocupado:", this.ocupado ? "Sí" : "No");
    console.log("Capacidad total:", this.capacidadTotal);
    console.log("Espacios ocupados:", this.espaciosOcupados);
    console.log("Tarifa por hora:", this.formatoMoneda(this.tarifaHora));
    console.log("Horas gratis:", this.horasGratis);
  },

  registrarEntrada: function (horaIngreso) {
    if (this.espaciosOcupados < this.capacidadTotal) {
      this.horaIngreso = horaIngreso
        ? this.crearFechaDesdeHora(horaIngreso)
        : new Date();
      this.espaciosOcupados++;
      this.ocupado = true;
      console.log(
        `\nEntrada registrada en el espacio ${this.numero} a las ${this.horaIngreso.toLocaleTimeString("es-CO")}.`,
      );
      console.log(
        `Espacios ocupados: ${this.espaciosOcupados}/${this.capacidadTotal}`,
      );
    } else {
      console.log(
        "El parqueadero está lleno. No se puede registrar la entrada.",
      );
    }
  },

  registrarSalida: function (horaSalida) {
    if (this.espaciosOcupados > 0) {
      this.horaSalida = horaSalida
        ? this.crearFechaDesdeHora(horaSalida)
        : new Date();
      this.espaciosOcupados--;
      this.ocupado = false;
      console.log(
        `\nSalida registrada del espacio ${this.numero} a las ${this.horaSalida.toLocaleTimeString("es-CO")}.`,
      );
      console.log(
        `Espacios ocupados: ${this.espaciosOcupados}/${this.capacidadTotal}`,
      );
      this.calcularTarifa();
    } else {
      console.log("No hay vehículos registrados.");
    }
  },

  espaciosDisponibles: function () {
    const disponibles = this.capacidadTotal - this.espaciosOcupados;
    console.log("Espacios disponibles:", disponibles);
  },

  calcularTarifa: function () {
    if (!this.horaIngreso || !this.horaSalida) {
      console.log(
        "No se puede calcular la tarifa. No se ha registrado la hora de ingreso o salida.",
      );
      return;
    }
    const milisegundos = this.horaSalida - this.horaIngreso;
    const horasTranscurridas = Math.ceil(milisegundos / (1000 * 60 * 60));
    const horasCobrables =
      horasTranscurridas > this.horasGratis
        ? horasTranscurridas - this.horasGratis
        : 0;
    const total = horasCobrables * this.tarifaHora;

    console.log(
      `\nTiempo total: ${horasTranscurridas} hora(s) (${this.horasGratis} hora(s) gratis).`,
    );
    console.log(`Total a pagar: ${this.formatoMoneda(total)}`);
  },
};

parqueadero.mostrarInformacion();
parqueadero.registrarEntrada("08:00 AM");
parqueadero.registrarSalida("05:00 PM");
parqueadero.espaciosDisponibles();
