import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Section7 } from '../home/section7/section7';
import { Footer } from '../footer/footer';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog',
  imports: [Header, Footer, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
readonly imagebaseurl = environment.apiBaseUrl;
}
