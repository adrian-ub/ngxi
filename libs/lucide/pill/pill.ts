import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePill],svg[lucide-pill]',
  host: {
    class: 'lucide lucide-pill',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
    />
    <svg:path d="m8.5 8.5 7 7" />
  `,
})
export class LucidePill {}
