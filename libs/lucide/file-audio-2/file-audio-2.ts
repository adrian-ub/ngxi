import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileAudio2],svg[lucide-file-audio-2]',
  host: {
    class: 'lucide lucide-file-audio-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:circle cx="3" cy="17" r="1" />
    <svg:path d="M2 17v-3a4 4 0 0 1 8 0v3" />
    <svg:circle cx="9" cy="17" r="1" />
  `,
})
export class LucideFileAudio2 {}
