import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVideotape],svg[lucide-videotape]',
  host: {
    class: 'lucide lucide-videotape',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="16" x="2" y="4" rx="2" />
    <svg:path d="M2 8h20" />
    <svg:circle cx="8" cy="14" r="2" />
    <svg:path d="M8 12h8" />
    <svg:circle cx="16" cy="14" r="2" />
  `,
})
export class LucideVideotape {}
