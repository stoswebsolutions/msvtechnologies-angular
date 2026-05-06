import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-development',
  imports: [Header,Footer],
  templateUrl: './development.html',
  styleUrl: './development.css',
})
export class Development {
readonly imageBaseurl = environment.apiBaseUrl;
}
