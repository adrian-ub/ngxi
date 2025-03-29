import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTruck],svg[lucide-truck]',
  host: {
    class: 'lucide lucide-truck',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <svg:path d="M15 18H9" />
    <svg:path
      d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
    />
    <svg:circle cx="17" cy="18" r="2" />
    <svg:circle cx="7" cy="18" r="2" />
  `,
})
export class LucideTruck {}
