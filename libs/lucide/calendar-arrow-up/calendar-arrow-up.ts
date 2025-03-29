import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarArrowUp],svg[lucide-calendar-arrow-up]',
  host: {
    class: 'lucide lucide-calendar-arrow-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m14 18 4-4 4 4" />
    <svg:path d="M16 2v4" />
    <svg:path d="M18 22v-8" />
    <svg:path
      d="M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"
    />
    <svg:path d="M3 10h18" />
    <svg:path d="M8 2v4" />
  `,
})
export class LucideCalendarArrowUp {}
