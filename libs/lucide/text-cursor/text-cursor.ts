import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTextCursor],svg[lucide-text-cursor]',
  host: {
    class: 'lucide lucide-text-cursor',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
    <svg:path d="M7 22h1a4 4 0 0 0 4-4v-1" />
    <svg:path d="M7 2h1a4 4 0 0 1 4 4v1" />
  `,
})
export class LucideTextCursor {}
