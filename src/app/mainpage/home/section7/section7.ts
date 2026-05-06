import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-section7',
  imports: [],
  templateUrl: './section7.html',
  styleUrl: './section7.css',
})
export class Section7 {
readonly imagebaseurl = environment.apiBaseUrl
}
