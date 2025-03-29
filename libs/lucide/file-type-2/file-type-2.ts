import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileType2],svg[lucide-file-type-2]',
  host: {
    class: 'lucide lucide-file-type-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path d="M2 13v-1h6v1" />
    <svg:path d="M5 12v6" />
    <svg:path d="M4 18h2" />
  `,
})
export class LucideFileType2 {}
