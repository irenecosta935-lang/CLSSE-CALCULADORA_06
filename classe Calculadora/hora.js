"use strict";
class Hora {
    constructor(hora, minutos, segundos) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    gethora() {
        return this.hora;
    }
    getminutos() {
        return this.minutos;
    }
    getsegundos() {
        return this.segundos;
    }
    formatar() {
        return `${this.hora}:${this.minutos}:${this.segundos}`;
    }
}
const horario = new Hora(8, 5, 9);
console.log(horario.gethora());
console.log(horario.getminutos());
console.log(horario.getsegundos());
console.log(horario.formatar());
