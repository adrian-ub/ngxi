import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlipVertical2],svg[lucide-flip-vertical-2]',
  host: {
    class: 'lucide lucide-flip-vertical-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m17 3-5 5-5-5h10" />
    <svg:path d="m17 21-5-5-5 5h10" />
    <svg:path d="M4 12H2" />
    <svg:path d="M10 12H8" />
    <svg:path d="M16 12h-2" />
    <svg:path d="M22 12h-2" />
  `,
})
export class LucideFlipVertical2 {}
