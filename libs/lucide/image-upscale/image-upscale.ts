import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideImageUpscale],svg[lucide-image-upscale]',
  host: {
    class: 'lucide lucide-image-upscale',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 3h5v5" />
    <svg:path d="M17 21h2a2 2 0 0 0 2-2" />
    <svg:path d="M21 12v3" />
    <svg:path d="m21 3-5 5" />
    <svg:path d="M3 7V5a2 2 0 0 1 2-2" />
    <svg:path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" />
    <svg:path d="M9 3h3" />
    <svg:rect x="3" y="11" width="10" height="10" rx="1" />
  `,
})
export class LucideImageUpscale {}
