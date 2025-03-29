import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNewspaper],svg[lucide-newspaper]',
  host: {
    class: 'lucide lucide-newspaper',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 18h-5" />
    <svg:path d="M18 14h-8" />
    <svg:path
      d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"
    />
    <svg:rect x="10" y="6" width="8" height="4" rx="1" />
  `,
})
export class LucideNewspaper {}
