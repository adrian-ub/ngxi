import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePersonStanding],svg[lucide-person-standing]',
  host: {
    class: 'lucide lucide-person-standing',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="5" r="1" />
    <svg:path d="m9 20 3-6 3 6" />
    <svg:path d="m6 8 6 2 6-2" />
    <svg:path d="M12 10v4" />
  `,
})
export class LucidePersonStanding {}
