import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarSync],svg[lucide-calendar-sync]',
  host: {
    class: 'lucide lucide-calendar-sync',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 10v4h4" />
    <svg:path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
    <svg:path d="M16 2v4" />
    <svg:path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
    <svg:path d="M21 22v-4h-4" />
    <svg:path
      d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"
    />
    <svg:path d="M3 10h4" />
    <svg:path d="M8 2v4" />
  `,
})
export class LucideCalendarSync {}
