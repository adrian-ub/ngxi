import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGripVertical],svg[lucide-grip-vertical]',
  host: {
    class: 'lucide lucide-grip-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="9" cy="12" r="1" />
    <svg:circle cx="9" cy="5" r="1" />
    <svg:circle cx="9" cy="19" r="1" />
    <svg:circle cx="15" cy="12" r="1" />
    <svg:circle cx="15" cy="5" r="1" />
    <svg:circle cx="15" cy="19" r="1" />
  `,
})
export class LucideGripVertical {}
