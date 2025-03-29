import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCodeXml],svg[lucide-code-xml]',
  host: {
    class: 'lucide lucide-code-xml',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m18 16 4-4-4-4" />
    <svg:path d="m6 8-4 4 4 4" />
    <svg:path d="m14.5 4-5 16" />
  `,
})
export class LucideCodeXml {}
