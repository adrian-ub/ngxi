import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBriefcase],svg[lucide-briefcase]',
  host: {
    class: 'lucide lucide-briefcase',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <svg:rect width="20" height="14" x="2" y="6" rx="2" />
  `,
})
export class LucideBriefcase {}
