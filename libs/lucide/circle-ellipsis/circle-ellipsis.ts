import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleEllipsis],svg[lucide-circle-ellipsis]',
  host: {
    class: 'lucide lucide-circle-ellipsis',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M17 12h.01" />
    <svg:path d="M12 12h.01" />
    <svg:path d="M7 12h.01" />
  `,
})
export class LucideCircleEllipsis {}
