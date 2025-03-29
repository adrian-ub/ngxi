import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGalleryVerticalEnd],svg[lucide-gallery-vertical-end]',
  host: {
    class: 'lucide lucide-gallery-vertical-end',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 2h10" />
    <svg:path d="M5 6h14" />
    <svg:rect width="18" height="12" x="3" y="10" rx="2" />
  `,
})
export class LucideGalleryVerticalEnd {}
