import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})

export class ShowComponent {

  constructor(private router: Router){}

  read(entity: string){
    if(entity === 'country'){
      this.router.navigate([`/read/${entity}`])
    }else if(entity === 'type'){
      this.router.navigate([`/read/${entity}`])
    } else if(entity === 'holi'){
      this.router.navigate([`/read/${entity}`])
    }
  }

}
