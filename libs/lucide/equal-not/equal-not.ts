import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEqualNot],svg[lucide-equal-not]',
  host: {
    class: 'lucide lucide-equal-not',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="5" x2="19" y1="9" y2="9" />
    <svg:line x1="5" x2="19" y1="15" y2="15" />
    <svg:line x1="19" x2="5" y1="5" y2="19" />
  `,
})
export class LucideEqualNot {}
