import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGrab],svg[lucide-grab]',
  host: {
    class: 'lucide lucide-grab',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
    <svg:path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
    <svg:path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
    <svg:path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
    <svg:path
      d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"
    />
  `,
})
export class LucideGrab {}
