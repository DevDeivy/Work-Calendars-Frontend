import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { TypeService } from '../../services/type.service';
import { FestivosServiceService } from '../../services/festivos-service.service';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  entity!: string
  response?: any;
  private _countrySearchService = inject(CountryService);
  private _typeSearchService = inject(TypeService);
  private _holiSearchService = inject(FestivosServiceService);

  country = new FormGroup({
    id: new FormControl('', Validators.required)
  })
  type = new FormGroup({
    id: new FormControl('', Validators.required)
  })
  holi = new FormGroup({
    id: new FormControl('', Validators.required)
  })

  constructor(private rout: ActivatedRoute){}

  ngOnInit():void{
    this.entity = this.rout.snapshot.paramMap.get('entity')!;
  }

  injectService(entity: string){
    const id = Number(this.country.get('id')?.value)
    if(entity === 'country'){
      this._countrySearchService.GetPais(id).subscribe(data => {
      }, err => {
        
      })
    } else if(entity === 'type'){
      this._typeSearchService.GetTipo(id).subscribe(data =>{

      },err =>{ 

      })
    }else if(entity === 'holi'){
      this._holiSearchService.GetFestivo(id).subscribe(data => {

      }, err => {
        err
      })
    }
  }

}
