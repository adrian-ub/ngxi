import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWaypoints],svg[lucide-waypoints]',
  host: {
    class: 'lucide lucide-waypoints',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="4.5" r="2.5" />
    <svg:path d="m10.2 6.3-3.9 3.9" />
    <svg:circle cx="4.5" cy="12" r="2.5" />
    <svg:path d="M7 12h10" />
    <svg:circle cx="19.5" cy="12" r="2.5" />
    <svg:path d="m13.8 17.7 3.9-3.9" />
    <svg:circle cx="12" cy="19.5" r="2.5" />
  `,
})
export class LucideWaypoints {}
