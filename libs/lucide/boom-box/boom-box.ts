import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBoomBox],svg[lucide-boom-box]',
  host: {
    class: 'lucide lucide-boom-box',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
    <svg:path d="M8 8v1" />
    <svg:path d="M12 8v1" />
    <svg:path d="M16 8v1" />
    <svg:rect width="20" height="12" x="2" y="9" rx="2" />
    <svg:circle cx="8" cy="15" r="2" />
    <svg:circle cx="16" cy="15" r="2" />
  `,
})
export class LucideBoomBox {}
