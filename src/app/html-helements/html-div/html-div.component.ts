import {Component, OnInit} from '@angular/core';
import {Animations} from '../../../utils/Animations';

@Component({
  selector: 'app-html-div',
  templateUrl: './html-div.component.html',
  styleUrls: ['./html-div.component.css']
})
export class HtmlDivComponent implements OnInit {

  marginTop = 0;

  elementPosition: number;
  opacity = 1;
  startValue = window.screen.height - 80;
  endValue = this.startValue - 500;
  increment = 1 / (this.startValue - this.endValue);
  inside = false;
  constructor() { }
  scrollHandler = (): void => {
    this.opacityController();
  };
  ngOnInit() {
    window.addEventListener('scroll', this.scrollHandler, true);
    window.onload = (event) => {
      this.elementPosition = document.getElementById('div-element').offsetTop;
      console.log('element pos: ' + this.elementPosition);
    };
    if (this.elementPosition <= this.endValue) {
      this.opacity = 1;
    }
  }
  async opacityController() {
    const currentPosition = this.elementPosition - ((document.body.scrollTop === 0) ? document.documentElement.scrollTop : document.body.scrollTop);
    if (!this.inside && currentPosition <= this.endValue) {
      this.inside = true;
      console.log('goinside');
      const tMin = 1;
      for (let i = 0.0; i < 2; i += 0.06) {
        await this.delay(tMin);
        this.marginTop = Animations.getXvalTransform(2, 1, 600, i);
      }
    }
    if (this.inside && currentPosition >= this.endValue) {
      this.inside = false;
      console.log('outinside');
      this.marginTop = 0;
    }
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  /*const currentPosition = this.elementPosition - ((document.body.scrollTop === 0) ? document.documentElement.scrollTop : document.body.scrollTop);
    console.log(this.elementPosition);
    if (currentPosition > this.startValue) {
      this.opacity = 0;
    }
    if (currentPosition < this.endValue) {
      this.opacity = 1;
    }
    if (currentPosition < this.startValue && currentPosition > this.endValue) {
      this.opacity = (this.startValue - currentPosition) / (this.startValue - this.endValue);
    }*/
}
