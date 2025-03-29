import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileWarning],svg[lucide-file-warning]',
  host: {
    class: 'lucide lucide-file-warning',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <svg:path d="M12 9v4" />
    <svg:path d="M12 17h.01" />
  `,
})
export class LucideFileWarning {}
