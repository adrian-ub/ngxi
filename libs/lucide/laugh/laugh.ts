import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLaugh],svg[lucide-laugh]',
  host: {
    class: 'lucide lucide-laugh',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
    <svg:line x1="9" x2="9.01" y1="9" y2="9" />
    <svg:line x1="15" x2="15.01" y1="9" y2="9" />
  `,
})
export class LucideLaugh {}
