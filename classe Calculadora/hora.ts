class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;
        constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
}
        public gethora(): number {
            return this.hora
}
        public getminutos(): number {
            return this.minutos
}
        public getsegundos(): number {
            return this.segundos
         
}
        public formatar(): string {
            return `${this.hora}:${this.minutos}:${this.segundos}`;
}
}
const horario = new Hora(8, 5, 9);

console.log(horario.gethora());
console.log(horario.getminutos());
console.log(horario.getsegundos());
console.log(horario.formatar());