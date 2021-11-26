   
export class Register {
    name: string = '';
    phone: string = '';
    email: string = '';
    cpf: string = '';

    constructor(name: string="", phone: string='', email:string='', cpf: string = '') {
        this.name = name;
        this.phone = phone
        this.email = email;
        this.cpf = cpf;
    }

}