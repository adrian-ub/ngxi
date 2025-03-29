import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendar1],svg[lucide-calendar-1]',
  host: {
    class: 'lucide lucide-calendar-1',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 14h1v4" />
    <svg:path d="M16 2v4" />
    <svg:path d="M3 10h18" />
    <svg:path d="M8 2v4" />
    <svg:rect x="3" y="4" width="18" height="18" rx="2" />
  `,
})
export class LucideCalendar1 {}
