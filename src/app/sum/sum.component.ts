import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'sum',
  templateUrl: 'sum.component.html',
})
export class SumComponent implements OnInit {

  form: FormGroup;
  result: Number;

  constructor(@Inject(FormBuilder) private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstValue: [0, Validators.minLength(1)],
      secondValue: [0, Validators.minLength(1)]
    });
  };

  calculateSum(){
    this.result = this.form.controls['firstValue'].value + this.form.controls['secondValue'].value
  }

}

