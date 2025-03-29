import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRectangleEllipsis],svg[lucide-rectangle-ellipsis]',
  host: {
    class: 'lucide lucide-rectangle-ellipsis',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="12" x="2" y="6" rx="2" />
    <svg:path d="M12 12h.01" />
    <svg:path d="M17 12h.01" />
    <svg:path d="M7 12h.01" />
  `,
})
export class LucideRectangleEllipsis {}
