import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTextSearch],svg[lucide-text-search]',
  host: {
    class: 'lucide lucide-text-search',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 6H3" />
    <svg:path d="M10 12H3" />
    <svg:path d="M10 18H3" />
    <svg:circle cx="17" cy="15" r="3" />
    <svg:path d="m21 19-1.9-1.9" />
  `,
})
export class LucideTextSearch {}
