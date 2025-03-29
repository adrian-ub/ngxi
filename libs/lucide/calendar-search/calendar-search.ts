import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarSearch],svg[lucide-calendar-search]',
  host: {
    class: 'lucide lucide-calendar-search',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 2v4" />
    <svg:path
      d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"
    />
    <svg:path d="m22 22-1.875-1.875" />
    <svg:path d="M3 10h18" />
    <svg:path d="M8 2v4" />
    <svg:circle cx="18" cy="18" r="3" />
  `,
})
export class LucideCalendarSearch {}
