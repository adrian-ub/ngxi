import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideForklift],svg[lucide-forklift]',
  host: {
    class: 'lucide lucide-forklift',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 12H5a2 2 0 0 0-2 2v5" />
    <svg:circle cx="13" cy="19" r="2" />
    <svg:circle cx="5" cy="19" r="2" />
    <svg:path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
  `,
})
export class LucideForklift {}
