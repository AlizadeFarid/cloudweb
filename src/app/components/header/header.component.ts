import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  mobileNavToogle() {
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  menuItemToggle() {
    document.querySelectorAll('#navbar a').forEach(navbarlink => {
      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          this.mobileNavToogle();
        }
      });
    });
  }
}
