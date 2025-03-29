import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGlobeLock],svg[lucide-globe-lock]',
  host: {
    class: 'lucide lucide-globe-lock',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"
    />
    <svg:path d="M2 12h8.5" />
    <svg:path d="M20 6V4a2 2 0 1 0-4 0v2" />
    <svg:rect width="8" height="5" x="14" y="6" rx="1" />
  `,
})
export class LucideGlobeLock {}
