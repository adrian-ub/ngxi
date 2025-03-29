import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSunMoon],svg[lucide-sun-moon]',
  host: {
    class: 'lucide lucide-sun-moon',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
    <svg:path d="M12 2v2" />
    <svg:path d="M12 20v2" />
    <svg:path d="m4.9 4.9 1.4 1.4" />
    <svg:path d="m17.7 17.7 1.4 1.4" />
    <svg:path d="M2 12h2" />
    <svg:path d="M20 12h2" />
    <svg:path d="m6.3 17.7-1.4 1.4" />
    <svg:path d="m19.1 4.9-1.4 1.4" />
  `,
})
export class LucideSunMoon {}
