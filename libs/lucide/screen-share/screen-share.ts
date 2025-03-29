import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScreenShare],svg[lucide-screen-share]',
  host: {
    class: 'lucide lucide-screen-share',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
    <svg:path d="M8 21h8" />
    <svg:path d="M12 17v4" />
    <svg:path d="m17 8 5-5" />
    <svg:path d="M17 3h5v5" />
  `,
})
export class LucideScreenShare {}
