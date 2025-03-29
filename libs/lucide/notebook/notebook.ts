import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNotebook],svg[lucide-notebook]',
  host: {
    class: 'lucide lucide-notebook',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 6h4" />
    <svg:path d="M2 10h4" />
    <svg:path d="M2 14h4" />
    <svg:path d="M2 18h4" />
    <svg:rect width="16" height="20" x="4" y="2" rx="2" />
    <svg:path d="M16 2v20" />
  `,
})
export class LucideNotebook {}
