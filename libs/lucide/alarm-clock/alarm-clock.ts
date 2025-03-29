import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlarmClock],svg[lucide-alarm-clock]',
  host: {
    class: 'lucide lucide-alarm-clock',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="13" r="8" />
    <svg:path d="M12 9v4l2 2" />
    <svg:path d="M5 3 2 6" />
    <svg:path d="m22 6-3-3" />
    <svg:path d="M6.38 18.7 4 21" />
    <svg:path d="M17.64 18.67 20 21" />
  `,
})
export class LucideAlarmClock {}
