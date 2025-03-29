import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBot],svg[lucide-bot]',
  host: {
    class: 'lucide lucide-bot',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 8V4H8" />
    <svg:rect width="16" height="12" x="4" y="8" rx="2" />
    <svg:path d="M2 14h2" />
    <svg:path d="M20 14h2" />
    <svg:path d="M15 13v2" />
    <svg:path d="M9 13v2" />
  `,
})
export class LucideBot {}
