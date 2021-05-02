import { Component } from '@angular/core';
import { Persona } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {

  model = new Persona(1, '', 0, '');
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('My name is called ' + this.model.name)
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newPerson() {
    this.model = new Persona(1, '', 0, '');
  }

  // Option two for the only number 
  onKeyPress(event: any) {
    const regexpNumber = /[0-9\+\-\ ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }

  //////// NOT SHOWN IN DOCS ////////
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // 
  }

}
