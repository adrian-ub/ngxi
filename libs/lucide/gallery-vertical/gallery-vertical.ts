import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGalleryVertical],svg[lucide-gallery-vertical]',
  host: {
    class: 'lucide lucide-gallery-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 2h18" />
    <svg:rect width="18" height="12" x="3" y="6" rx="2" />
    <svg:path d="M3 22h18" />
  `,
})
export class LucideGalleryVertical {}
