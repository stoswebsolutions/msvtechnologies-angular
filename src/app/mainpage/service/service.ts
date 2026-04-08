import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Section4 } from '../home/section4/section4';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-service',
  imports: [RouterLink,Header,Section4,Footer],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {

}
