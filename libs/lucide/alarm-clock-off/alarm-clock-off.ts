import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlarmClockOff],svg[lucide-alarm-clock-off]',
  host: {
    class: 'lucide lucide-alarm-clock-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
    <svg:path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
    <svg:path d="m22 6-3-3" />
    <svg:path d="M6.26 18.67 4 21" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M4 4 2 6" />
  `,
})
export class LucideAlarmClockOff {}
