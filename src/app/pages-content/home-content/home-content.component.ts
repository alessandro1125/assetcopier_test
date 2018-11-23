import {Component, OnInit, AfterContentInit} from '@angular/core';
import {$} from 'protractor';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit, AfterContentInit {
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); // third parameter

  }
  getHeight() {
    const offset = document.getElementById('example-container').offsetTop;
    console.log('element pos: ' + offset);
  }
  scroll = (): void => {
    const scroll = (document.body.scrollTop === 0) ? document.documentElement.scrollTop : document.body.scrollTop;
  };

  ngAfterContentInit(): void {
  }
}
