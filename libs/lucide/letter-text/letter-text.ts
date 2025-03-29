import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLetterText],svg[lucide-letter-text]',
  host: {
    class: 'lucide lucide-letter-text',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 12h6" />
    <svg:path d="M15 6h6" />
    <svg:path d="m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" />
    <svg:path d="M3 18h18" />
    <svg:path d="M4 11h6" />
  `,
})
export class LucideLetterText {}
