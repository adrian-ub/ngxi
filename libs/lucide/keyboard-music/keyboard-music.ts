import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideKeyboardMusic],svg[lucide-keyboard-music]',
  host: {
    class: 'lucide lucide-keyboard-music',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="16" x="2" y="4" rx="2" />
    <svg:path d="M6 8h4" />
    <svg:path d="M14 8h.01" />
    <svg:path d="M18 8h.01" />
    <svg:path d="M2 12h20" />
    <svg:path d="M6 12v4" />
    <svg:path d="M10 12v4" />
    <svg:path d="M14 12v4" />
    <svg:path d="M18 12v4" />
  `,
})
export class LucideKeyboardMusic {}
