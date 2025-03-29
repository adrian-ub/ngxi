import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeading5],svg[lucide-heading-5]',
  host: {
    class: 'lucide lucide-heading-5',
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
    <svg:path d="M17 13v-3h4" />
    <svg:path
      d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"
    />
  `,
})
export class LucideHeading5 {}
