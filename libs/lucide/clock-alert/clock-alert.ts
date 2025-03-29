import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClockAlert],svg[lucide-clock-alert]',
  host: {
    class: 'lucide lucide-clock-alert',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 6v6l4 2" />
    <svg:path d="M16 21.16a10 10 0 1 1 5-13.516" />
    <svg:path d="M20 11.5v6" />
    <svg:path d="M20 21.5h.01" />
  `,
})
export class LucideClockAlert {}
