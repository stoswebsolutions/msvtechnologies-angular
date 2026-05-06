import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Header,Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
