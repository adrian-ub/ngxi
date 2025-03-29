import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeading1],svg[lucide-heading-1]',
  host: {
    class: 'lucide lucide-heading-1',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 12h8" />
    <svg:path d="M4 18V6" />
    <svg:path d="M12 18V6" />
    <svg:path d="m17 12 3-2v8" />
  `,
})
export class LucideHeading1 {}
