import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleHelp],svg[lucide-circle-help]',
  host: {
    class: 'lucide lucide-circle-help',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <svg:path d="M12 17h.01" />
  `,
})
export class LucideCircleHelp {}
