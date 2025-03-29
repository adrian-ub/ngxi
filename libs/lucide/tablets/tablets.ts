import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTablets],svg[lucide-tablets]',
  host: {
    class: 'lucide lucide-tablets',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="7" cy="7" r="5" />
    <svg:circle cx="17" cy="17" r="5" />
    <svg:path d="M12 17h10" />
    <svg:path d="m3.46 10.54 7.08-7.08" />
  `,
})
export class LucideTablets {}
