import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFactory],svg[lucide-factory]',
  host: {
    class: 'lucide lucide-factory',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    />
    <svg:path d="M17 18h1" />
    <svg:path d="M12 18h1" />
    <svg:path d="M7 18h1" />
  `,
})
export class LucideFactory {}
