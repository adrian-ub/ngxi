import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFrown],svg[lucide-frown]',
  host: {
    class: 'lucide lucide-frown',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <svg:line x1="9" x2="9.01" y1="9" y2="9" />
    <svg:line x1="15" x2="15.01" y1="9" y2="9" />
  `,
})
export class LucideFrown {}
