import { Component, OnInit, HostListener } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scrollValue: number = 0;

  image: any;

  content: string = 'app';

  constructor() {

  }

  ngOnInit() {

    AOS.init();

    let background = document.getElementsByClassName('bg')[0];
    let image_container = document.getElementById('ms_image_container');

    this.image = document.getElementById('ms_image');

    let navbar = document.getElementById('nav_landing');
    let nav_logo = document.getElementById('nav_logo');

    let navbar_small = document.getElementById('nav_landing_small');

    // let app_content = document.getElementById('ms_applications_p');

    let app_project_list = document.getElementById('ms_applications_project_list');

    console.log(innerWidth, innerHeight);

    window.addEventListener('scroll', () => {
      this.scrollValue = window.scrollY;
      let winHeight = window.innerHeight;

      image_container.style.top = -this.scrollValue * 0.5 + 'px';

      if (this.scrollValue >= (winHeight * 0.85)) {
        navbar.style.position = 'fixed';
        navbar.style.top = '3%'
        navbar.style.width = '66vw';
        navbar.style.zIndex = '100';

        nav_logo.style.position = 'relative'
        nav_logo.style.display = 'block'

        navbar_small.style.position = 'fixed';
        navbar_small.style.top = '2%';
        navbar_small.style.width = '82vw';
        navbar_small.style.zIndex = '100';



        // app_content.style.top = window.innerHeight*0.9 + (this.scrollValue * 0.15) + 'px';

        // navbarSCroll.setAttribute('data-aos', 'fade-down');



        // app_project_list.style.top = window.innerHeight*1.2 + (this.scrollValue * 0.2) + 'px';

      } else {
        navbar.style.position = 'relative';

        nav_logo.style.position = 'absolute'
        nav_logo.style.display = 'none'

        navbar_small.style.position = 'relative';

      }
    })

    window.addEventListener('mousemove', e => {
      let valueX = e.clientX;
      let valueY = e.clientY;

      this.image.style.backgroundPositionX = 70 + (valueX / window.innerWidth) * 10 + '%';

      // background.style.left = -15 + (valueX / window.innerWidth) * 4 + '%';
      // background.style.top = 0 + (valueY/window.innerWidth) * -8 + '%';
    })
  }

  changeTopic(topic: string): void {

    if (topic == 'app') {
      this.image.style.backgroundImage = 'url(../../assets/images/app-white.jpg)';
      this.content = 'app';
    }

    if (topic == 'bd') {
      this.image.style.backgroundImage = 'url(../../assets/images/bigdata-white.jpg)';
      this.content = 'bd';
    }

    if (topic == 'ml') {
      this.image.style.backgroundImage = 'url(../../assets/images/ml-white.jpeg)';
      this.content = 'ml';
    }

    if (topic == 'web') {
      this.image.style.backgroundImage = 'url(../../assets/images/website-white.jpg)';
      this.content = 'web';
    }

    if (topic == 'i2ot') {
      this.image.style.backgroundImage = 'url(../../assets/images/iot-white.jpg)';
      this.content = 'i2ot';
    }

  }



}
