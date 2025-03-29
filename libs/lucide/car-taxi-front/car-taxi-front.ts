import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCarTaxiFront],svg[lucide-car-taxi-front]',
  host: {
    class: 'lucide lucide-car-taxi-front',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 2h4" />
    <svg:path
      d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
    />
    <svg:path d="M7 14h.01" />
    <svg:path d="M17 14h.01" />
    <svg:rect width="18" height="8" x="3" y="10" rx="2" />
    <svg:path d="M5 18v2" />
    <svg:path d="M19 18v2" />
  `,
})
export class LucideCarTaxiFront {}
