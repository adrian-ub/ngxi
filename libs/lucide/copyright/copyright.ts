import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCopyright],svg[lucide-copyright]',
  host: {
    class: 'lucide lucide-copyright',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
  `,
})
export class LucideCopyright {}
