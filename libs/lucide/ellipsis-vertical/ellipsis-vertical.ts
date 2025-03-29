import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEllipsisVertical],svg[lucide-ellipsis-vertical]',
  host: {
    class: 'lucide lucide-ellipsis-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="1" />
    <svg:circle cx="12" cy="5" r="1" />
    <svg:circle cx="12" cy="19" r="1" />
  `,
})
export class LucideEllipsisVertical {}
