import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlbum],svg[lucide-album]',
  host: {
    class: 'lucide lucide-album',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <svg:polyline points="11 3 11 11 14 8 17 11 17 3" />
  `,
})
export class LucideAlbum {}
