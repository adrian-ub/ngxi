import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTimerReset],svg[lucide-timer-reset]',
  host: {
    class: 'lucide lucide-timer-reset',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 2h4" />
    <svg:path d="M12 14v-4" />
    <svg:path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
    <svg:path d="M9 17H4v5" />
  `,
})
export class LucideTimerReset {}
