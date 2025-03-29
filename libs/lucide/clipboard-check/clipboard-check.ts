import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClipboardCheck],svg[lucide-clipboard-check]',
  host: {
    class: 'lucide lucide-clipboard-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <svg:path
      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    />
    <svg:path d="m9 14 2 2 4-4" />
  `,
})
export class LucideClipboardCheck {}
