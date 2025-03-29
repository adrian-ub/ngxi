import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendar],svg[lucide-calendar]',
  host: {
    class: 'lucide lucide-calendar',
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
    <svg:rect width="18" height="18" x="3" y="4" rx="2" />
    <svg:path d="M3 10h18" />
  `,
})
export class LucideCalendar {}
