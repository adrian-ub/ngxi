import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siElevenlabs],svg[si-elevenlabs]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>ElevenLabs</svg:title>
    <svg:path d="M4.6035 0v24h4.9317V0zm9.8613 0v24h4.9317V0z" />`,
})
export class SiElevenlabs {}
