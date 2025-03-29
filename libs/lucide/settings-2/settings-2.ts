import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSettings2],svg[lucide-settings-2]',
  host: {
    class: 'lucide lucide-settings-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M20 7h-9" />
    <svg:path d="M14 17H5" />
    <svg:circle cx="17" cy="17" r="3" />
    <svg:circle cx="7" cy="7" r="3" />
  `,
})
export class LucideSettings2 {}
