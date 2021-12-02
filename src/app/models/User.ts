export class User {
    ruc: string;
    nombre_o_razon_social: string;
    estado_del_contribuyente:string;
    condicion_de_domicilio:string;
    distrito:string;
    provincia:string;
    departamento:string;

    constructor(nombre_o_razon_social: string, estado_del_contribuyente:string, condicion_de_domicilio:string,distrito:string,provincia:string, departamento:string  ) {
        this.nombre_o_razon_social = nombre_o_razon_social;
        this.estado_del_contribuyente = estado_del_contribuyente;
        this.condicion_de_domicilio = condicion_de_domicilio;
        this.distrito = distrito;
        this.provincia = provincia;
        this.departamento = departamento;
    }
}