import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-development',
  imports: [RouterLink,Header,Footer],
  templateUrl: './development.html',
  styleUrl: './development.css',
})
export class Development {

}
