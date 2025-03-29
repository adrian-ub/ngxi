import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileDigit],svg[lucide-file-digit]',
  host: {
    class: 'lucide lucide-file-digit',
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
    <svg:rect width="4" height="6" x="2" y="12" rx="2" />
    <svg:path d="M10 12h2v6" />
    <svg:path d="M10 18h4" />
  `,
})
export class LucideFileDigit {}
