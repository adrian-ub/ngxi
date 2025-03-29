import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCookie],svg[lucide-cookie]',
  host: {
    class: 'lucide lucide-cookie',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
    <svg:path d="M8.5 8.5v.01" />
    <svg:path d="M16 15.5v.01" />
    <svg:path d="M12 12v.01" />
    <svg:path d="M11 17v.01" />
    <svg:path d="M7 14v.01" />
  `,
})
export class LucideCookie {}
