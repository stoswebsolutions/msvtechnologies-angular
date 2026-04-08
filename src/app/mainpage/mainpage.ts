import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Contact } from './contact/contact';
import { Home } from './home/home';



@Component({
  selector: 'app-mainpage',
  imports: [RouterLink,Header,Contact,Home],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage {

}
