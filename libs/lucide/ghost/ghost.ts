import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGhost],svg[lucide-ghost]',
  host: {
    class: 'lucide lucide-ghost',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9 10h.01" />
    <svg:path d="M15 10h.01" />
    <svg:path
      d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
    />
  `,
})
export class LucideGhost {}
