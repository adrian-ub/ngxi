import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListMusic],svg[lucide-list-music]',
  host: {
    class: 'lucide lucide-list-music',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 15V6" />
    <svg:path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    <svg:path d="M12 12H3" />
    <svg:path d="M16 6H3" />
    <svg:path d="M12 18H3" />
  `,
})
export class LucideListMusic {}
