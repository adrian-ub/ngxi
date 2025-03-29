import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClipboardCopy],svg[lucide-clipboard-copy]',
  host: {
    class: 'lucide lucide-clipboard-copy',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <svg:path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    <svg:path d="M16 4h2a2 2 0 0 1 2 2v4" />
    <svg:path d="M21 14H11" />
    <svg:path d="m15 10-4 4 4 4" />
  `,
})
export class LucideClipboardCopy {}
