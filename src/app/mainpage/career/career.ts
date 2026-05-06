import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Section5 } from '../home/section5/section5';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-career',
  imports: [Header,Section5,Footer],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {

}
