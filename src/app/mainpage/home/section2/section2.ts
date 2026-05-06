import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home } from '../home';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-section2',
  imports: [],
  templateUrl: './section2.html',
  styleUrl: './section2.css',
})
export class Section2 {
readonly imagebaseurl = environment.apiBaseUrl;
}
