import { Register } from './../../model/register';
import { PersistenceService } from './../../persistence.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  baseURL = "../assets/";
  register = new Register('','','','');
  editRegister: FormGroup;

  persistence = PersistenceService;

  cart = PersistenceService.cart;

  constructor() {
    this.editRegister = new FormGroup({
      'cpf': new FormControl(this.register.cpf, [Validators.required, Validators.minLength(11)]),
      'name': new FormControl(this.register.name, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(this.register.email, [Validators.required]),
      'phone': new FormControl(this.register.phone),
    })
   }

   get name() {return this.editRegister.get('name')};
   get email() {return this.editRegister.get('email')};
   get cpf() {return this.editRegister.get('cpf')};

   FormSubmit() {
    const name =  this.editRegister.get('name')?.value;
    const email =  this.editRegister.get('email')?.value;
    const phone =  this.editRegister.get('phone')?.value;
    const cpf =  this.editRegister.get('cpf')?.value;
    const newRegister = new Register(name, email, phone, cpf);
    this.persistence.updateRegisterFromLocalStorage(newRegister);
    this.editRegister.reset();
    alert("Salvo com sucesso");
   }

  finishPurchase() {
    this.persistence.register = JSON.parse(localStorage.getItem("register") ?? "null");
    if (this.persistence.register) {
      alert("compra concluida");
    } else {
      alert ("você deve preencher o formulário de cadastro")
    }
  }

}
