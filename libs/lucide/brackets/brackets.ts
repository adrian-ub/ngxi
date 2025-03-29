import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBrackets],svg[lucide-brackets]',
  host: {
    class: 'lucide lucide-brackets',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 3h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2" />
    <svg:path d="M8 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2" />
  `,
})
export class LucideBrackets {}
