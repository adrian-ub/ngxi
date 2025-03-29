import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGalleryHorizontal],svg[lucide-gallery-horizontal]',
  host: {
    class: 'lucide lucide-gallery-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 3v18" />
    <svg:rect width="12" height="18" x="6" y="3" rx="2" />
    <svg:path d="M22 3v18" />
  `,
})
export class LucideGalleryHorizontal {}
