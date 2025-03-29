import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideGalleryHorizontalEnd],svg[lucide-gallery-horizontal-end]',
  host: {
    class: 'lucide lucide-gallery-horizontal-end',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 7v10" />
    <svg:path d="M6 5v14" />
    <svg:rect width="12" height="18" x="10" y="3" rx="2" />
  `,
})
export class LucideGalleryHorizontalEnd {}
