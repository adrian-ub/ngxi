import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookCopy],svg[lucide-book-copy]',
  host: {
    class: 'lucide lucide-book-copy',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 16V4a2 2 0 0 1 2-2h11" />
    <svg:path
      d="M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"
    />
    <svg:path d="M5 14H4a2 2 0 1 0 0 4h1" />
  `,
})
export class LucideBookCopy {}
