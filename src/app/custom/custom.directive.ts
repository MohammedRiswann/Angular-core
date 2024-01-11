import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class appCustom implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('constructor logged!');
  }

  color: string = 'red';
  ngOnInit(): void {
    this.highlight(this.color);
  }

  highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('wheat');
  }
}
