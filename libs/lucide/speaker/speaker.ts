import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSpeaker],svg[lucide-speaker]',
  host: {
    class: 'lucide lucide-speaker',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="16" height="20" x="4" y="2" rx="2" />
    <svg:path d="M12 6h.01" />
    <svg:circle cx="12" cy="14" r="4" />
    <svg:path d="M12 14h.01" />
  `,
})
export class LucideSpeaker {}
