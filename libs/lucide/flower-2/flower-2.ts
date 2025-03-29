import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlower2],svg[lucide-flower-2]',
  host: {
    class: 'lucide lucide-flower-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
    />
    <svg:circle cx="12" cy="8" r="2" />
    <svg:path d="M12 10v12" />
    <svg:path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
    <svg:path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
  `,
})
export class LucideFlower2 {}
