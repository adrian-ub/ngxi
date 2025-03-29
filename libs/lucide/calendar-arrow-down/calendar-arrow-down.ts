import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarArrowDown],svg[lucide-calendar-arrow-down]',
  host: {
    class: 'lucide lucide-calendar-arrow-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m14 18 4 4 4-4" />
    <svg:path d="M16 2v4" />
    <svg:path d="M18 14v8" />
    <svg:path
      d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"
    />
    <svg:path d="M3 10h18" />
    <svg:path d="M8 2v4" />
  `,
})
export class LucideCalendarArrowDown {}
