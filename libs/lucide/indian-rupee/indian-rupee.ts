import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIndianRupee],svg[lucide-indian-rupee]',
  host: {
    class: 'lucide lucide-indian-rupee',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 3h12" />
    <svg:path d="M6 8h12" />
    <svg:path d="m6 13 8.5 8" />
    <svg:path d="M6 13h3" />
    <svg:path d="M9 13c6.667 0 6.667-10 0-10" />
  `,
})
export class LucideIndianRupee {}
