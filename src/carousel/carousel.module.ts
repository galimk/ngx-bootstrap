import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CarouselComponent } from './carousel.component';
import { SlideComponent } from './slide.component';
import { ArrowComponent } from './arrow.component';
import { CarouselConfig } from './carousel.config';

@NgModule({
  imports: [CommonModule],
  declarations: [SlideComponent, CarouselComponent, ArrowComponent],
  exports: [SlideComponent, CarouselComponent, ArrowComponent],
  providers: [CarouselConfig]
})
export class CarouselModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: CarouselModule, providers: []};
  }
}
