import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { Mainpage } from './mainpage/mainpage';
import { Header } from './mainpage/header/header';
import { Home } from './mainpage/home/home';
import { About } from './mainpage/about/about';
import { Service } from './mainpage/service/service';
import { Development } from './mainpage/development/development';
import { Career } from './mainpage/career/career';
import { Blog } from './mainpage/blog/blog';
import { Contact } from './mainpage/contact/contact';
import { Footer } from './mainpage/footer/footer';
import { Corousel } from './mainpage/home/corousel/corousel';


export const routes: Routes = [
    {path:'',component:Mainpage},
    {path:'mainpage',component:Mainpage},
    {path:'header',component:Header},
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'service',component:Service},
    {path:'development',component:Development},
    {path:'career',component:Career},
    {path:'blog',component:Blog},
    {path:'contact',component:Contact},
    {path:'corousel',component:Corousel},
    {path:'footer',component:Footer},
    {path:'**',redirectTo:"full"}
];
