import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMemoryStick],svg[lucide-memory-stick]',
  host: {
    class: 'lucide lucide-memory-stick',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 19v-3" />
    <svg:path d="M10 19v-3" />
    <svg:path d="M14 19v-3" />
    <svg:path d="M18 19v-3" />
    <svg:path d="M8 11V9" />
    <svg:path d="M16 11V9" />
    <svg:path d="M12 11V9" />
    <svg:path d="M2 15h20" />
    <svg:path
      d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
    />
  `,
})
export class LucideMemoryStick {}
