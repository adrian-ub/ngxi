import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRemoveFormatting],svg[lucide-remove-formatting]',
  host: {
    class: 'lucide lucide-remove-formatting',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 7V4h16v3" />
    <svg:path d="M5 20h6" />
    <svg:path d="M13 4 8 20" />
    <svg:path d="m15 15 5 5" />
    <svg:path d="m20 15-5 5" />
  `,
})
export class LucideRemoveFormatting {}
