import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVariable],svg[lucide-variable]',
  host: {
    class: 'lucide lucide-variable',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 21s-4-3-4-9 4-9 4-9" />
    <svg:path d="M16 3s4 3 4 9-4 9-4 9" />
    <svg:line x1="15" x2="9" y1="9" y2="15" />
    <svg:line x1="9" x2="15" y1="9" y2="15" />
  `,
})
export class LucideVariable {}
