import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
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
  selector: 'app-test-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test-list.component.html',
  styleUrl: './test-list.component.css'
})
export class TestListComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    initTE(
      { Validation, Input, Datepicker, Select, Modal, Collapse, Toast },
      { allowReinits: true }
    );
  }

  onFormSubmit(){}
}
