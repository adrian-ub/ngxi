import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCake],svg[lucide-cake]',
  host: {
    class: 'lucide lucide-cake',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <svg:path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
    <svg:path d="M2 21h20" />
    <svg:path d="M7 8v3" />
    <svg:path d="M12 8v3" />
    <svg:path d="M17 8v3" />
    <svg:path d="M7 4h.01" />
    <svg:path d="M12 4h.01" />
    <svg:path d="M17 4h.01" />
  `,
})
export class LucideCake {}
