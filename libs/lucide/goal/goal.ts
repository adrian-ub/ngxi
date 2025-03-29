import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGoal],svg[lucide-goal]',
  host: {
    class: 'lucide lucide-goal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 13V2l8 4-8 4" />
    <svg:path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
    <svg:path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
  `,
})
export class LucideGoal {}
