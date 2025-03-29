import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWallpaper],svg[lucide-wallpaper]',
  host: {
    class: 'lucide lucide-wallpaper',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="8" cy="9" r="2" />
    <svg:path
      d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
    />
    <svg:path d="M8 21h8" />
    <svg:path d="M12 17v4" />
  `,
})
export class LucideWallpaper {}
