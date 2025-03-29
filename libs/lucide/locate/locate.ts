import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLocate],svg[lucide-locate]',
  host: {
    class: 'lucide lucide-locate',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="2" x2="5" y1="12" y2="12" />
    <svg:line x1="19" x2="22" y1="12" y2="12" />
    <svg:line x1="12" x2="12" y1="2" y2="5" />
    <svg:line x1="12" x2="12" y1="19" y2="22" />
    <svg:circle cx="12" cy="12" r="7" />
  `,
})
export class LucideLocate {}
