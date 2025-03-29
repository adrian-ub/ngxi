import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVenusAndMars],svg[lucide-venus-and-mars]',
  host: {
    class: 'lucide lucide-venus-and-mars',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 20h4" />
    <svg:path d="M12 16v6" />
    <svg:path d="M17 2h4v4" />
    <svg:path d="m21 2-5.46 5.46" />
    <svg:circle cx="12" cy="11" r="5" />
  `,
})
export class LucideVenusAndMars {}
