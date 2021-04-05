import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

@Component({
  selector: 'app-navbar-public',
  templateUrl: './navbar-public.component.html',
  styleUrls: ['./navbar-public.component.scss']
})
export class NavbarPublicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      registerLocaleData(en);
  }

}
