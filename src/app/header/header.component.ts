import {Component, ElementRef, HostListener, OnInit, Renderer, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tabsMarginTop = 55;
  titleMarginLeft = 20;
  scroll = (): void => {
    this.tabsController();
    this.titleController();
  }
  constructor() {
  }
  ngOnInit() {
    /* Set starting top marign */
    window.addEventListener('scroll', this.scroll, true);
  }
  tabsController() {
    const scrollPos = this.getScrollPos();
    const value = -scrollPos / 7 + 55;
    if (value > 20) {
      this.tabsMarginTop = value;
    } else {
      this.tabsMarginTop = 20;
    }
    if (scrollPos === 0) {
      this.tabsMarginTop = 55;
    }
  }
  titleController() {
    const scrollPos = this.getScrollPos();
    const value = -scrollPos / 10 + 20;
    if (value > 0) {
      this.titleMarginLeft = value;
    } else {
      this.titleMarginLeft = 0;
    }
    if (scrollPos === 0) {
      this.titleMarginLeft = 20;
    }
  }
  getScrollPos(): number {
    return (document.body.scrollTop === 0) ? document.documentElement.scrollTop : document.body.scrollTop;
  }
}
