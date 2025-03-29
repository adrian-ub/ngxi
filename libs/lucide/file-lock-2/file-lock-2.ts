import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileLock2],svg[lucide-file-lock-2]',
  host: {
    class: 'lucide lucide-file-lock-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:rect width="8" height="5" x="2" y="13" rx="1" />
    <svg:path d="M8 13v-2a2 2 0 1 0-4 0v2" />
  `,
})
export class LucideFileLock2 {}
