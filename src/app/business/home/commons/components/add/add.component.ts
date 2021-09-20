import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from 'src/app/commons/models/items';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form: FormGroup;
  currentItem: Items;
  json = JSON.parse(localStorage.getItem('json'));

  constructor(public route: Router) {
    this.currentItem = this.route.getCurrentNavigation().extras.state as Items;
  }

  ngOnInit(): void {
    if (this.currentItem !== undefined) {
      let item = this.currentItem;
      this.form = new FormGroup({
        id: new FormControl(item.id),
        title: new FormControl(item.title),
        _about: new FormControl(item._about),
        accessURL: new FormControl(item.accessURL),
      });
    } else {
      this.createForm();
    }
  }

  createForm() {
    this.form = new FormGroup({
      id: new FormControl(this.json.length),
      title: new FormControl('', Validators.required),
      _about: new FormControl('', Validators.required),
      accessURL: new FormControl('', Validators.required),
    });
  }

  save() {    
    if (this.currentItem !== undefined) {
      let item = this.currentItem
      let json = JSON.parse(localStorage.getItem('json'));
      let form = this.form.value;
      let newItem = json[item.id] = form
      localStorage.clear();
      localStorage.setItem('json', JSON.stringify(json));
      this.route.navigate(['home']);

    } else {
      let json = JSON.parse(localStorage.getItem('json'));
      let form = this.form.value;
      json.push(form);
      localStorage.clear();
      localStorage.setItem('json', JSON.stringify(json));
      this.route.navigate(['home']);
    }
  }
}
