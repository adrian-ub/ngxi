import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarOff],svg[lucide-calendar-off]',
  host: {
    class: 'lucide lucide-calendar-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"
    />
    <svg:path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" />
    <svg:path d="M16 2v4" />
    <svg:path d="M3 10h7" />
    <svg:path d="M21 10h-5.5" />
    <svg:path d="m2 2 20 20" />
  `,
})
export class LucideCalendarOff {}
