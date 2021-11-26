import { ProductDBService } from './../../product-db.service';
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
  register = new Register();
  editRegister: FormGroup;

  // total = ProductDBService.gamesCatalogue.price;
  // purchase: FormGroup;

  persistence = PersistenceService;

  constructor() {
    this.editRegister = new FormGroup({
      'name': new FormControl(this.register.name, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(this.register.email, [Validators.required]),
      'phone': new FormControl(this.register.phone),
      'cpf': new FormControl(this.register.cpf, [Validators.required, Validators.minLength(11)])
    })
    // this.purchase = new FormGroup({
    //   'submitAll': new FormControl(this.submitAll, [Validators.required]),

    // })
   }

   get name() {return this.editRegister.get('name')};
   get email() {return this.editRegister.get('email')};
   get cpf() {return this.editRegister.get('cpf')};
  //  get submitAll() {return this.purchase.get('submitAll')};

   FormSubmit() {
    const name =  this.editRegister.get('name')?.value;
    const email =  this.editRegister.get('email')?.value;
    const phone =  this.editRegister.get('phone')?.value;
    const cpf =  this.editRegister.get('cpf')?.value;
    const newRegister = new Register(name, email, phone, cpf);
    this.persistence.updateRegisterFromLocalStorage(newRegister);
   }

  //  FormSubmitAll() {
  //    const submitAll = this.purchase.get('submitAll')?.value;
  //  }

  finishPurchase() {
    PersistenceService.register = JSON.parse(localStorage.getItem("register") ?? "[]");
    if (PersistenceService.register.length > 0) {
      alert("compra concluida");
    } else {
      alert ("você deve preencher o formulário de cadastro")
    }
  }

}
