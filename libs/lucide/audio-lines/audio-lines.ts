import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAudioLines],svg[lucide-audio-lines]',
  host: {
    class: 'lucide lucide-audio-lines',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 10v3" />
    <svg:path d="M6 6v11" />
    <svg:path d="M10 3v18" />
    <svg:path d="M14 8v7" />
    <svg:path d="M18 5v13" />
    <svg:path d="M22 10v3" />
  `,
})
export class LucideAudioLines {}
