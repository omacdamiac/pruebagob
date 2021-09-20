import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Items } from 'src/app/commons/models/items';
import { DatosService } from './services/datos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items: Items[];
  first = 0;
  load: boolean = false;
  rows = 5;
  constructor(public route: Router, public datosService: DatosService) {}

  ngOnInit(): void {
    this.getListItem();
  }

  getListItem() {
    this.datosService.getList().subscribe({
      next: (data) => {
        if (localStorage.getItem('json') === null) {
          localStorage.setItem('json', JSON.stringify(data));
        }
        this.items = JSON.parse(localStorage.getItem('json'));
        this.load = true;
      },
    });
  }

  edit(id) {
    let json = JSON.parse(localStorage.getItem('json'));
    const items: any = json.filter((item: Items) => item.id === id)[0];

    const navigationExtras: NavigationExtras = { state: items };
    this.route.navigate(['/home/add'], navigationExtras);
  }

  add() {
    this.route.navigate(['home/add']);
  }

  delete(id) {
    let json = JSON.parse(localStorage.getItem('json'));
    json.splice(id, 1);
    localStorage.clear();
    localStorage.setItem('json', JSON.stringify(json));
    this.getListItem();
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.items ? this.first === this.items.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.items ? this.first === 0 : true;
  }
}
