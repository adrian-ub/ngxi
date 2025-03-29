import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleDashed],svg[lucide-circle-dashed]',
  host: {
    class: 'lucide lucide-circle-dashed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
    <svg:path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
    <svg:path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
    <svg:path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
    <svg:path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
    <svg:path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
    <svg:path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
    <svg:path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
  `,
})
export class LucideCircleDashed {}
