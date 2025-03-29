import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAsterisk],svg[lucide-asterisk]',
  host: {
    class: 'lucide lucide-asterisk',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 6v12" />
    <svg:path d="M17.196 9 6.804 15" />
    <svg:path d="m6.804 9 10.392 6" />
  `,
})
export class LucideAsterisk {}
