import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileKey],svg[lucide-file-key]',
  host: {
    class: 'lucide lucide-file-key',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <svg:circle cx="10" cy="16" r="2" />
    <svg:path d="m16 10-4.5 4.5" />
    <svg:path d="m15 11 1 1" />
  `,
})
export class LucideFileKey {}
