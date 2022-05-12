export interface user {
    id: number;
    sucursal: number;
    nombre: string;
    cedula: string;
    correo: string;
    celular: string;
    genero: string;
    cargo: string;
    imagen: string;
    administrador: boolean;
    activo: boolean;
    fecha_nacimiento: Date;
    fecha_ingreso: Date;
    fecha_salida: Date;
    token: string;
}