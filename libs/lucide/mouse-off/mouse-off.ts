import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMouseOff],svg[lucide-mouse-off]',
  host: {
    class: 'lucide lucide-mouse-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 6v.343" />
    <svg:path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" />
    <svg:path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" />
    <svg:path d="M22 22 2 2" />
  `,
})
export class LucideMouseOff {}
