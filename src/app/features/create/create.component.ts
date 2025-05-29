import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  entity!: string;

  country = new FormGroup({
    id: new FormControl('',Validators.required),
    nombre: new FormControl('', Validators.required)
  });

  type = new FormGroup({
    id: new FormControl('',Validators.required),
    tipo: new FormControl('', Validators.required)
  });

  holi = new FormGroup({
    id: new FormControl('',Validators.required),
    idCountry: new FormControl('', Validators.required),
    dia: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    mes: new FormControl('', Validators.required),
    diasPascua: new FormControl('', Validators.required),
    idTipo: new FormControl('', Validators.required),
  })

  constructor(private rout: ActivatedRoute){}

  ngOnInit():void{
    this.entity = this.rout.snapshot.paramMap.get('entity')!;
    // this.metodo(this.entity)
  }

  createNewElement(){
    const id = Number(this.country.get('id')?.value);
    const nombre = this.country.get('nombre')?.value!;
  }
}
