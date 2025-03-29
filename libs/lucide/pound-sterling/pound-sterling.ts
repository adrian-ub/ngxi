import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePoundSterling],svg[lucide-pound-sterling]',
  host: {
    class: 'lucide lucide-pound-sterling',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 7c0-5.333-8-5.333-8 0" />
    <svg:path d="M10 7v14" />
    <svg:path d="M6 21h12" />
    <svg:path d="M6 13h10" />
  `,
})
export class LucidePoundSterling {}
