import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCableCar],svg[lucide-cable-car]',
  host: {
    class: 'lucide lucide-cable-car',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 3h.01" />
    <svg:path d="M14 2h.01" />
    <svg:path d="m2 9 20-5" />
    <svg:path d="M12 12V6.5" />
    <svg:rect width="16" height="10" x="4" y="12" rx="3" />
    <svg:path d="M9 12v5" />
    <svg:path d="M15 12v5" />
    <svg:path d="M4 17h16" />
  `,
})
export class LucideCableCar {}
