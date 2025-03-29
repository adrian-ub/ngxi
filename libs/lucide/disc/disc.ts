import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDisc],svg[lucide-disc]',
  host: {
    class: 'lucide lucide-disc',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:circle cx="12" cy="12" r="2" />
  `,
})
export class LucideDisc {}
