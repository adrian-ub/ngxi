import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileLock],svg[lucide-file-lock]',
  host: {
    class: 'lucide lucide-file-lock',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <svg:rect width="8" height="6" x="8" y="12" rx="1" />
    <svg:path d="M10 12v-2a2 2 0 1 1 4 0v2" />
  `,
})
export class LucideFileLock {}
