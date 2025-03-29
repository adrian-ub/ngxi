import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileAudio],svg[lucide-file-audio]',
  host: {
    class: 'lucide lucide-file-audio',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path
      d="M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"
    />
  `,
})
export class LucideFileAudio {}
