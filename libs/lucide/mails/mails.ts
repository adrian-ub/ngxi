import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMails],svg[lucide-mails]',
  host: {
    class: 'lucide lucide-mails',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="16" height="13" x="6" y="4" rx="2" />
    <svg:path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
    <svg:path d="M2 8v11c0 1.1.9 2 2 2h14" />
  `,
})
export class LucideMails {}
