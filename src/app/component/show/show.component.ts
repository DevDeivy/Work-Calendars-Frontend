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

  read(entity: string) {
  const validEntities = ['country', 'type', 'holi'];
    if (validEntities.includes(entity)) {
      this.router.navigate([`/read/${entity}`]);
    }
  }
  create(entity: string){
    const validEntities = ['country', 'type', 'holi']
    if(validEntities.includes(entity)){
      this.router.navigate([`/create/${entity}`])
    }
  }
  delete(entity: string){
    const validEntities = ['country', 'type', 'holi']
    if(validEntities.includes(entity)){
      this.router.navigate([`/delete/${entity}`])
    }
  }
  search(entity: string){
    const validEntities = ['country', 'type', 'holi']
    if(validEntities.includes(entity)){
      this.router.navigate([`/search/${entity}`])
    }
  }
  update(entity: string){
    const validEntities = ['country', 'type', 'holi']
    if(validEntities.includes(entity)){
      this.router.navigate([`/update/${entity}`])
    }
  }

}
