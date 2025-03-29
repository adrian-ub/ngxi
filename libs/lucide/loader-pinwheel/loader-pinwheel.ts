import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLoaderPinwheel],svg[lucide-loader-pinwheel]',
  host: {
    class: 'lucide lucide-loader-pinwheel',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
    <svg:path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
    <svg:path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
    <svg:circle cx="12" cy="12" r="10" />
  `,
})
export class LucideLoaderPinwheel {}
