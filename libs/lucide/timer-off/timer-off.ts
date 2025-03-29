import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTimerOff],svg[lucide-timer-off]',
  host: {
    class: 'lucide lucide-timer-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 2h4" />
    <svg:path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" />
    <svg:path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M12 12v-2" />
  `,
})
export class LucideTimerOff {}
