import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDiscAlbum],svg[lucide-disc-album]',
  host: {
    class: 'lucide lucide-disc-album',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:circle cx="12" cy="12" r="5" />
    <svg:path d="M12 12h.01" />
  `,
})
export class LucideDiscAlbum {}
