import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEarthLock],svg[lucide-earth-lock]',
  host: {
    class: 'lucide lucide-earth-lock',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 3.34V5a3 3 0 0 0 3 3" />
    <svg:path
      d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
    />
    <svg:path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
    <svg:path d="M12 2a10 10 0 1 0 9.54 13" />
    <svg:path d="M20 6V4a2 2 0 1 0-4 0v2" />
    <svg:rect width="8" height="5" x="14" y="6" rx="1" />
  `,
})
export class LucideEarthLock {}
