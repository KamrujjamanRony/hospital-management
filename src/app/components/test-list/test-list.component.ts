import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import {
  initTE,
  Modal,
  Toast
} from 'tw-elements';

@Component({
  selector: 'app-test-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-list.component.html',
  styleUrl: './test-list.component.css'
})
export class TestListComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    initTE(
      { Modal, Toast },
      { allowReinits: true }
    );
  }

  onFormSubmit(){}
}
