import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSwissFranc],svg[lucide-swiss-franc]',
  host: {
    class: 'lucide lucide-swiss-franc',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 21V3h8" />
    <svg:path d="M6 16h9" />
    <svg:path d="M10 9.5h7" />
  `,
})
export class LucideSwissFranc {}
