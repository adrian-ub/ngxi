import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBeaker],svg[lucide-beaker]',
  host: {
    class: 'lucide lucide-beaker',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4.5 3h15" />
    <svg:path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
    <svg:path d="M6 14h12" />
  `,
})
export class LucideBeaker {}
