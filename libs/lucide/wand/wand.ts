import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWand],svg[lucide-wand]',
  host: {
    class: 'lucide lucide-wand',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 4V2" />
    <svg:path d="M15 16v-2" />
    <svg:path d="M8 9h2" />
    <svg:path d="M20 9h2" />
    <svg:path d="M17.8 11.8 19 13" />
    <svg:path d="M15 9h.01" />
    <svg:path d="M17.8 6.2 19 5" />
    <svg:path d="m3 21 9-9" />
    <svg:path d="M12.2 6.2 11 5" />
  `,
})
export class LucideWand {}
