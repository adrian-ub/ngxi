import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileClock],svg[lucide-file-clock]',
  host: {
    class: 'lucide lucide-file-clock',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:circle cx="8" cy="16" r="6" />
    <svg:path d="M9.5 17.5 8 16.25V14" />
  `,
})
export class LucideFileClock {}
