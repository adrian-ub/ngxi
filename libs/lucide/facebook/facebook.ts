import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFacebook],svg[lucide-facebook]',
  host: {
    class: 'lucide lucide-facebook',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    />
  `,
})
export class LucideFacebook {}
