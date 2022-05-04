export class user {
    public id: number | undefined;
    public sucursal: number | undefined | null;
    public nombre: string | undefined | null;
    public cedula: string | undefined | null;
    public correo: string | undefined | null;
    public celular: string | undefined | null;
    public genero: string | undefined | null;
    public cargo: string | undefined | null;
    public imagen: string | undefined | null;
    public administrador: boolean | undefined | null;
    public activo: boolean | undefined | null;
    public fecha_nacimiento: Date | undefined | null;
    public fecha_ingreso: Date | undefined | null;
    public fecha_salida: Date | undefined | null;
    private token: string | undefined | null;

    constructor(id: number, sucursal: number, nombre: string, cedula: string, correo: string, celular: string, cargo: string) {
            this.id = id;
            this.sucursal = sucursal;
            this.nombre = nombre;
            this.cedula = cedula;
            this.correo = correo;
            this.celular = celular;
            this.cargo = cargo;
    }
}