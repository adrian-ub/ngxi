import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideImagePlay],svg[lucide-image-play]',
  host: {
    class: 'lucide lucide-image-play',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m11 16-5 5" />
    <svg:path d="M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5" />
    <svg:path
      d="M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
    />
    <svg:circle cx="9" cy="9" r="2" />
  `,
})
export class LucideImagePlay {}
