import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideALargeSmall],svg[lucide-a-large-small]',
  host: {
    class: 'lucide lucide-a-large-small',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 14h-5" />
    <svg:path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
    <svg:path d="M4.5 13h6" />
    <svg:path d="m3 16 4.5-9 4.5 9" />
  `,
})
export class LucideALargeSmall {}
