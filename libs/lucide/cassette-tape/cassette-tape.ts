import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCassetteTape],svg[lucide-cassette-tape]',
  host: {
    class: 'lucide lucide-cassette-tape',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="16" x="2" y="4" rx="2" />
    <svg:circle cx="8" cy="10" r="2" />
    <svg:path d="M8 12h8" />
    <svg:circle cx="16" cy="10" r="2" />
    <svg:path
      d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"
    />
  `,
})
export class LucideCassetteTape {}
