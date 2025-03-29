import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGripHorizontal],svg[lucide-grip-horizontal]',
  host: {
    class: 'lucide lucide-grip-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="9" r="1" />
    <svg:circle cx="19" cy="9" r="1" />
    <svg:circle cx="5" cy="9" r="1" />
    <svg:circle cx="12" cy="15" r="1" />
    <svg:circle cx="19" cy="15" r="1" />
    <svg:circle cx="5" cy="15" r="1" />
  `,
})
export class LucideGripHorizontal {}
