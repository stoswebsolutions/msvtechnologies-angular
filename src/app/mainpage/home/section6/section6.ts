import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import e from 'express';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-section6',
  imports: [],
  templateUrl: './section6.html',
  styleUrl: './section6.css',
})
export class Section6 {
readonly imagbaseurl = environment.apiBaseUrl;
}
