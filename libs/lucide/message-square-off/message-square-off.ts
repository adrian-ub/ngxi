import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareOff],svg[lucide-message-square-off]',
  host: {
    class: 'lucide lucide-message-square-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 15V5a2 2 0 0 0-2-2H9" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" />
  `,
})
export class LucideMessageSquareOff {}
