import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLoaderCircle],svg[lucide-loader-circle]',
  host: {
    class: 'lucide lucide-loader-circle',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M21 12a9 9 0 1 1-6.219-8.56" /> `,
})
export class LucideLoaderCircle {}
