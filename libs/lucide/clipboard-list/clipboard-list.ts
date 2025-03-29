import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClipboardList],svg[lucide-clipboard-list]',
  host: {
    class: 'lucide lucide-clipboard-list',
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
    <svg:path d="M12 11h4" />
    <svg:path d="M12 16h4" />
    <svg:path d="M8 11h.01" />
    <svg:path d="M8 16h.01" />
  `,
})
export class LucideClipboardList {}
