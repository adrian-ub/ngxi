import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideContact],svg[lucide-contact]',
  host: {
    class: 'lucide lucide-contact',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 2v2" />
    <svg:path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    <svg:path d="M8 2v2" />
    <svg:circle cx="12" cy="11" r="3" />
    <svg:rect x="3" y="4" width="18" height="18" rx="2" />
  `,
})
export class LucideContact {}
