import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePointer],svg[lucide-pointer]',
  host: {
    class: 'lucide lucide-pointer',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M22 14a8 8 0 0 1-8 8" />
    <svg:path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
    <svg:path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" />
    <svg:path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" />
    <svg:path
      d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
    />
  `,
})
export class LucidePointer {}
