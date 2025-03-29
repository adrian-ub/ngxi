import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignJustify],svg[lucide-align-justify]',
  host: {
    class: 'lucide lucide-align-justify',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 12h18" />
    <svg:path d="M3 18h18" />
    <svg:path d="M3 6h18" />
  `,
})
export class LucideAlignJustify {}
