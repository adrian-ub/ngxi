import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownToLine],svg[lucide-arrow-down-to-line]',
  host: {
    class: 'lucide lucide-arrow-down-to-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 17V3" />
    <svg:path d="m6 11 6 6 6-6" />
    <svg:path d="M19 21H5" />
  `,
})
export class LucideArrowDownToLine {}
