import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-section1',
  imports: [RouterLink],
  templateUrl: './section1.html',
  styleUrl: './section1.css',
})
export class Section1 {
readonly imageBaseurl = environment.apiBaseUrl;
}
