import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDisc3],svg[lucide-disc-3]',
  host: {
    class: 'lucide lucide-disc-3',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
    <svg:circle cx="12" cy="12" r="2" />
    <svg:path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
  `,
})
export class LucideDisc3 {}
