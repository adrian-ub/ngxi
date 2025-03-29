import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAngry],svg[lucide-angry]',
  host: {
    class: 'lucide lucide-angry',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <svg:path d="M7.5 8 10 9" />
    <svg:path d="m14 9 2.5-1" />
    <svg:path d="M9 10h.01" />
    <svg:path d="M15 10h.01" />
  `,
})
export class LucideAngry {}
