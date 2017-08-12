import { Component, HostBinding, OnDestroy, Input, OnInit } from '@angular/core';

import { CarouselComponent } from './carousel.component';

@Component({
  selector: 'arrow',
  template: `
    <a 
      [ngClass]="{
                'carousel-control': true, 
                'left carousel-control-prev': direction === ArrowDirection.PREV , 
                'right carousel-control-next': direction === ArrowDirection.NEXT 
      }" 
      [class.disabled]="carousel.activeSlide === 0 && carousel.noWrap" 
      (click)="changeSlide()" *ngIf="carousel.slides.length > 1">
      <ng-content></ng-content>
    </a>
  `
})
export class ArrowComponent implements OnInit {
  @Input()
  public direction:ArrowDirection = ArrowDirection.PREV;
  public carousel:CarouselComponent;

  public constructor(carousel:CarouselComponent) {
    this.carousel = carousel;
  }

  public changeSlide() {
    if (this.direction == ArrowDirection.PREV) {
      this.carousel.previousSlide();
    } else {
      this.carousel.nextSlide();
    }
  }

  public ngOnInit():void {
    this.carousel.addArrow(this);
   }
}

export enum ArrowDirection { NEXT, PREV }
