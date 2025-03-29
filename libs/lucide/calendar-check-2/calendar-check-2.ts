import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarCheck2],svg[lucide-calendar-check-2]',
  host: {
    class: 'lucide lucide-calendar-check-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 2v4" />
    <svg:path d="M16 2v4" />
    <svg:path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
    <svg:path d="M3 10h18" />
    <svg:path d="m16 20 2 2 4-4" />
  `,
})
export class LucideCalendarCheck2 {}
