import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGalleryThumbnails],svg[lucide-gallery-thumbnails]',
  host: {
    class: 'lucide lucide-gallery-thumbnails',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="14" x="3" y="3" rx="2" />
    <svg:path d="M4 21h1" />
    <svg:path d="M9 21h1" />
    <svg:path d="M14 21h1" />
    <svg:path d="M19 21h1" />
  `,
})
export class LucideGalleryThumbnails {}
