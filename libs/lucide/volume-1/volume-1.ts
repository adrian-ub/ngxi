import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVolume1],svg[lucide-volume-1]',
  host: {
    class: 'lucide lucide-volume-1',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    />
    <svg:path d="M16 9a5 5 0 0 1 0 6" />
  `,
})
export class LucideVolume1 {}
