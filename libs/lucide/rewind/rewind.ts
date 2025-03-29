import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRewind],svg[lucide-rewind]',
  host: {
    class: 'lucide lucide-rewind',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polygon points="11 19 2 12 11 5 11 19" />
    <svg:polygon points="22 19 13 12 22 5 22 19" />
  `,
})
export class LucideRewind {}
