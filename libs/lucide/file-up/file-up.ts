import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileUp],svg[lucide-file-up]',
  host: {
    class: 'lucide lucide-file-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path d="M12 12v6" />
    <svg:path d="m15 15-3-3-3 3" />
  `,
})
export class LucideFileUp {}
