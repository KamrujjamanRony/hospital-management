import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Validation,
  Input,
  initTE,
  Datepicker,
  Select,
  Modal,
  Collapse,
  Toast
} from 'tw-elements';

@Component({
  selector: 'app-add-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-test.component.html',
  styleUrl: './add-test.component.css'
})
export class AddTestComponent {

  ngAfterViewInit(): void {
    initTE(
      { Validation, Input, Datepicker, Select, Modal, Collapse, Toast },
      { allowReinits: true }
    );
  }

  onFormSubmit(){}

}
