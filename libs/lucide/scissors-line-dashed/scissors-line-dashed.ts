import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScissorsLineDashed],svg[lucide-scissors-line-dashed]',
  host: {
    class: 'lucide lucide-scissors-line-dashed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5.42 9.42 8 12" />
    <svg:circle cx="4" cy="8" r="2" />
    <svg:path d="m14 6-8.58 8.58" />
    <svg:circle cx="4" cy="16" r="2" />
    <svg:path d="M10.8 14.8 14 18" />
    <svg:path d="M16 12h-2" />
    <svg:path d="M22 12h-2" />
  `,
})
export class LucideScissorsLineDashed {}
