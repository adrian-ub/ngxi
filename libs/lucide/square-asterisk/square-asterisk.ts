import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareAsterisk],svg[lucide-square-asterisk]',
  host: {
    class: 'lucide lucide-square-asterisk',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M12 8v8" />
    <svg:path d="m8.5 14 7-4" />
    <svg:path d="m8.5 10 7 4" />
  `,
})
export class LucideSquareAsterisk {}
