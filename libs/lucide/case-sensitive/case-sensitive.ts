import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCaseSensitive],svg[lucide-case-sensitive]',
  host: {
    class: 'lucide lucide-case-sensitive',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 15 4-8 4 8" />
    <svg:path d="M4 13h6" />
    <svg:circle cx="18" cy="12" r="3" />
    <svg:path d="M21 9v6" />
  `,
})
export class LucideCaseSensitive {}
