import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCone],svg[lucide-cone]',
  host: {
    class: 'lucide lucide-cone',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" />
    <svg:ellipse cx="12" cy="19" rx="9" ry="3" />
  `,
})
export class LucideCone {}
