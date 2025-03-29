import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCrop],svg[lucide-crop]',
  host: {
    class: 'lucide lucide-crop',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 2v14a2 2 0 0 0 2 2h14" />
    <svg:path d="M18 22V8a2 2 0 0 0-2-2H2" />
  `,
})
export class LucideCrop {}
