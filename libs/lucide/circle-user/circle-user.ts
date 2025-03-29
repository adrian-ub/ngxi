import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleUser],svg[lucide-circle-user]',
  host: {
    class: 'lucide lucide-circle-user',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:circle cx="12" cy="10" r="3" />
    <svg:path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
  `,
})
export class LucideCircleUser {}
