import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBackpack],svg[lucide-backpack]',
  host: {
    class: 'lucide lucide-backpack',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
    />
    <svg:path d="M8 10h8" />
    <svg:path d="M8 18h8" />
    <svg:path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
    <svg:path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
  `,
})
export class LucideBackpack {}
