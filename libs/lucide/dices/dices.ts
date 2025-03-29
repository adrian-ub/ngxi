import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDices],svg[lucide-dices]',
  host: {
    class: 'lucide lucide-dices',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
    <svg:path
      d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
    />
    <svg:path d="M6 18h.01" />
    <svg:path d="M10 14h.01" />
    <svg:path d="M15 6h.01" />
    <svg:path d="M18 9h.01" />
  `,
})
export class LucideDices {}
