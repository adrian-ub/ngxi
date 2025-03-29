import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoonStar],svg[lucide-moon-star]',
  host: {
    class: 'lucide lucide-moon-star',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
    <svg:path d="M20 3v4" />
    <svg:path d="M22 5h-4" />
  `,
})
export class LucideMoonStar {}
