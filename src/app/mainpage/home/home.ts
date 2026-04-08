import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Section1 } from './section1/section1';
import { Section2 } from './section2/section2';
import { Section3 } from './section3/section3';
import { Section4 } from './section4/section4';
import { Footer } from '../footer/footer';
import { Section5 } from './section5/section5';
import { Section6 } from './section6/section6';
import { Section7 } from './section7/section7';
import { Corousel } from "./corousel/corousel";


@Component({
  selector: 'app-home',
  imports: [RouterLink, Header, Section1, Section2, Section3, Section4, Footer, Section5, Section6, Section7, Corousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
