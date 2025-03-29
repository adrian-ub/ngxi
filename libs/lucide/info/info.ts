import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideInfo],svg[lucide-info]',
  host: {
    class: 'lucide lucide-info',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M12 16v-4" />
    <svg:path d="M12 8h.01" />
  `,
})
export class LucideInfo {}
