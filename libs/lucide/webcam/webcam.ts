import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWebcam],svg[lucide-webcam]',
  host: {
    class: 'lucide lucide-webcam',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="10" r="8" />
    <svg:circle cx="12" cy="10" r="3" />
    <svg:path d="M7 22h10" />
    <svg:path d="M12 22v-4" />
  `,
})
export class LucideWebcam {}
