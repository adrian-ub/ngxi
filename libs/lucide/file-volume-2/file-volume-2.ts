import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileVolume2],svg[lucide-file-volume-2]',
  host: {
    class: 'lucide lucide-file-volume-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path d="M8 15h.01" />
    <svg:path d="M11.5 13.5a2.5 2.5 0 0 1 0 3" />
    <svg:path d="M15 12a5 5 0 0 1 0 6" />
  `,
})
export class LucideFileVolume2 {}
