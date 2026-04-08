import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';

import { Section2 } from '../home/section2/section2';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-about',
  imports: [RouterLink,Header,Section2,Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
