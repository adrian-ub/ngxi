import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBriefcaseBusiness],svg[lucide-briefcase-business]',
  host: {
    class: 'lucide lucide-briefcase-business',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 12h.01" />
    <svg:path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <svg:path d="M22 13a18.15 18.15 0 0 1-20 0" />
    <svg:rect width="20" height="14" x="2" y="6" rx="2" />
  `,
})
export class LucideBriefcaseBusiness {}
