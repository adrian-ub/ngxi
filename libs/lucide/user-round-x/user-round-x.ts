import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundX],svg[lucide-user-round-x]',
  host: {
    class: 'lucide lucide-user-round-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 21a8 8 0 0 1 11.873-7" />
    <svg:circle cx="10" cy="8" r="5" />
    <svg:path d="m17 17 5 5" />
    <svg:path d="m22 17-5 5" />
  `,
})
export class LucideUserRoundX {}
