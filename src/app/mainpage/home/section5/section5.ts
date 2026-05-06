import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-section5',
  imports: [],
  templateUrl: './section5.html',
  styleUrl: './section5.css',
})
export class Section5 {
readonly imagbaseurl = environment.apiBaseUrl;
}
