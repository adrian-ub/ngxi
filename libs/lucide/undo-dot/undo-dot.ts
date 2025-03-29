import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUndoDot],svg[lucide-undo-dot]',
  host: {
    class: 'lucide lucide-undo-dot',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
    <svg:path d="M3 7v6h6" />
    <svg:circle cx="12" cy="17" r="1" />
  `,
})
export class LucideUndoDot {}
