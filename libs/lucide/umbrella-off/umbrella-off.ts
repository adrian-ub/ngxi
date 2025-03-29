import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUmbrellaOff],svg[lucide-umbrella-off]',
  host: {
    class: 'lucide lucide-umbrella-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 2v1" />
    <svg:path d="M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575" />
    <svg:path d="M17.5 12H22A10 10 0 0 0 9.004 3.455" />
    <svg:path d="m2 2 20 20" />
  `,
})
export class LucideUmbrellaOff {}
