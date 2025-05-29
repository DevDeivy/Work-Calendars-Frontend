import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { TypeService } from '../../services/type.service';
import { FestivosServiceService } from '../../services/festivos-service.service';

@Component({
  selector: 'app-read',
  imports: [],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {

  entity!: string;
  countryS = 'country';
  typeS = 'type';
  holiS = 'holi';

  private _countryReadService = inject(CountryService)
  private _typeReadService = inject(TypeService)
  private _holiReadService = inject(FestivosServiceService)

  constructor(private rout: ActivatedRoute){}

  ngOnInit():void{
    this.entity = this.rout.snapshot.paramMap.get('entity')!;
    this.callService(this.entity)
  }

  callService(entity: string){  
    if(entity === this.countryS){
      this._countryReadService.GetPaises().subscribe(data => {

      },err => {

      })
    }
    else if(entity === this.typeS){
      this._typeReadService.GetTipos().subscribe(data =>{

      }, err =>{

      })
    }
    else if(entity === this.holiS){
      this._holiReadService.GetFestivos().subscribe(data =>{

      },err =>{

      })
    }
  }

}
