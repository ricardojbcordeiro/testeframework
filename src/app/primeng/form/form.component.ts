import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  checked: boolean = true;

  fcChecked = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.fcChecked.setValue(false);
  }

}
