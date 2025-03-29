import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideContactRound],svg[lucide-contact-round]',
  host: {
    class: 'lucide lucide-contact-round',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 2v2" />
    <svg:path d="M17.915 22a6 6 0 0 0-12 0" />
    <svg:path d="M8 2v2" />
    <svg:circle cx="12" cy="12" r="4" />
    <svg:rect x="3" y="4" width="18" height="18" rx="2" />
  `,
})
export class LucideContactRound {}
