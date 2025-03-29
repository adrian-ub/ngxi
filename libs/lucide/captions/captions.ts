import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCaptions],svg[lucide-captions]',
  host: {
    class: 'lucide lucide-captions',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
    <svg:path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
  `,
})
export class LucideCaptions {}
