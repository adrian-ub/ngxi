import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideBriefcaseConveyorBelt],svg[lucide-briefcase-conveyor-belt]',
  host: {
    class: 'lucide lucide-briefcase-conveyor-belt',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 20v2" />
    <svg:path d="M14 20v2" />
    <svg:path d="M18 20v2" />
    <svg:path d="M21 20H3" />
    <svg:path d="M6 20v2" />
    <svg:path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
    <svg:rect x="4" y="6" width="16" height="10" rx="2" />
  `,
})
export class LucideBriefcaseConveyorBelt {}
