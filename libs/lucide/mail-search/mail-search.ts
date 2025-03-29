import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMailSearch],svg[lucide-mail-search]',
  host: {
    class: 'lucide lucide-mail-search',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"
    />
    <svg:path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    <svg:path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <svg:circle cx="18" cy="18" r="3" />
    <svg:path d="m22 22-1.5-1.5" />
  `,
})
export class LucideMailSearch {}
