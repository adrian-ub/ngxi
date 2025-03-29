import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClockArrowUp],svg[lucide-clock-arrow-up]',
  host: {
    class: 'lucide lucide-clock-arrow-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13.228 21.925A10 10 0 1 1 21.994 12.338" />
    <svg:path d="M12 6v6l1.562.781" />
    <svg:path d="m14 18 4-4 4 4" />
    <svg:path d="M18 22v-8" />
  `,
})
export class LucideClockArrowUp {}
