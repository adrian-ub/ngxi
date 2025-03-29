import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListRestart],svg[lucide-list-restart]',
  host: {
    class: 'lucide lucide-list-restart',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 6H3" />
    <svg:path d="M7 12H3" />
    <svg:path d="M7 18H3" />
    <svg:path
      d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"
    />
    <svg:path d="M11 10v4h4" />
  `,
})
export class LucideListRestart {}
