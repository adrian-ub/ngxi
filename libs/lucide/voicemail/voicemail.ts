import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVoicemail],svg[lucide-voicemail]',
  host: {
    class: 'lucide lucide-voicemail',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="6" cy="12" r="4" />
    <svg:circle cx="18" cy="12" r="4" />
    <svg:line x1="6" x2="18" y1="16" y2="16" />
  `,
})
export class LucideVoicemail {}
