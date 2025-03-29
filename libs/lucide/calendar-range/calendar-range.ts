import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarRange],svg[lucide-calendar-range]',
  host: {
    class: 'lucide lucide-calendar-range',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="4" rx="2" />
    <svg:path d="M16 2v4" />
    <svg:path d="M3 10h18" />
    <svg:path d="M8 2v4" />
    <svg:path d="M17 14h-6" />
    <svg:path d="M13 18H7" />
    <svg:path d="M7 14h.01" />
    <svg:path d="M17 18h.01" />
  `,
})
export class LucideCalendarRange {}
