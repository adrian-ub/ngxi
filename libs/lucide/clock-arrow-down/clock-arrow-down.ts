import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClockArrowDown],svg[lucide-clock-arrow-down]',
  host: {
    class: 'lucide lucide-clock-arrow-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12.338 21.994A10 10 0 1 1 21.925 13.227" />
    <svg:path d="M12 6v6l2 1" />
    <svg:path d="m14 18 4 4 4-4" />
    <svg:path d="M18 14v8" />
  `,
})
export class LucideClockArrowDown {}
