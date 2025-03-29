import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookAudio],svg[lucide-book-audio]',
  host: {
    class: 'lucide lucide-book-audio',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 6v7" />
    <svg:path d="M16 8v3" />
    <svg:path
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    />
    <svg:path d="M8 8v3" />
  `,
})
export class LucideBookAudio {}
