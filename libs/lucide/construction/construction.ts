import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideConstruction],svg[lucide-construction]',
  host: {
    class: 'lucide lucide-construction',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect x="2" y="6" width="20" height="8" rx="1" />
    <svg:path d="M17 14v7" />
    <svg:path d="M7 14v7" />
    <svg:path d="M17 3v3" />
    <svg:path d="M7 3v3" />
    <svg:path d="M10 14 2.3 6.3" />
    <svg:path d="m14 6 7.7 7.7" />
    <svg:path d="m8 6 8 8" />
  `,
})
export class LucideConstruction {}
