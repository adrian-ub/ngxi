import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarClock],svg[lucide-calendar-clock]',
  host: {
    class: 'lucide lucide-calendar-clock',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
    />
    <svg:path d="M16 2v4" />
    <svg:path d="M8 2v4" />
    <svg:path d="M3 10h5" />
    <svg:path d="M17.5 17.5 16 16.3V14" />
    <svg:circle cx="16" cy="16" r="6" />
  `,
})
export class LucideCalendarClock {}
