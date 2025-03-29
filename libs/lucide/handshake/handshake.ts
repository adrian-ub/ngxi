import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHandshake],svg[lucide-handshake]',
  host: {
    class: 'lucide lucide-handshake',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <svg:path
      d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
    />
    <svg:path d="m21 3 1 11h-2" />
    <svg:path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <svg:path d="M3 4h8" />
  `,
})
export class LucideHandshake {}
