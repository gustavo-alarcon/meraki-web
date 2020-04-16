import { Component, OnInit, HostListener } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scrollValue: number = 0;

  constructor() {

  }

  ngOnInit() {

    AOS.init();

    let background = document.getElementById('ms_background');
    let image_container = document.getElementById('ms_image_container');
    let image = document.getElementById('ms_image');

    let navbar = document.getElementById('ms_nav_containter_landing');
    let navbarSCroll = document.getElementById('ms_nav_container_scroll');

    let app_content = document.getElementById('ms_applications_p');

    let app_project_list = document.getElementById('ms_applications_project_list');

    

    window.addEventListener('scroll', () => {
      this.scrollValue = window.scrollY;
      let winHeight = window.innerHeight;

      image_container.style.top = -this.scrollValue * 0.5 + 'px';

      if (this.scrollValue >= (winHeight*0.85)) {
        navbar.style.display = 'none';
        navbarSCroll.style.opacity = '1';

        app_content.style.top = window.innerHeight*0.9 + (this.scrollValue * 0.15) + 'px';

        // navbarSCroll.setAttribute('data-aos', 'fade-down');

        

        // app_project_list.style.top = window.innerHeight*1.2 + (this.scrollValue * 0.2) + 'px';

      } else {
        navbar.style.display = 'block';
        navbarSCroll.style.opacity = '0';
      }
    })

    window.addEventListener('mousemove', e => {
      let valueX = e.clientX;
      let valueY = e.clientY;

      image.style.backgroundPositionX = 70 + (valueX / window.innerWidth) * 10 + '%';

      background.style.left = -15 + (valueX / window.innerWidth) * 4 + '%';
      // background.style.top = 0 + (valueY/window.innerWidth) * -8 + '%';
    })
  }



}
