import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClipboardType],svg[lucide-clipboard-type]',
  host: {
    class: 'lucide lucide-clipboard-type',
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
    <svg:path d="M9 12v-1h6v1" />
    <svg:path d="M11 17h2" />
    <svg:path d="M12 11v6" />
  `,
})
export class LucideClipboardType {}
