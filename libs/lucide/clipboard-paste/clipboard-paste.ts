import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClipboardPaste],svg[lucide-clipboard-paste]',
  host: {
    class: 'lucide lucide-clipboard-paste',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"
    />
    <svg:path
      d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
    />
    <svg:path d="m17 10 4 4-4 4" />
  `,
})
export class LucideClipboardPaste {}
