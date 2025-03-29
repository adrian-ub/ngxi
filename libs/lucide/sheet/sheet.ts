import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSheet],svg[lucide-sheet]',
  host: {
    class: 'lucide lucide-sheet',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <svg:line x1="3" x2="21" y1="9" y2="9" />
    <svg:line x1="3" x2="21" y1="15" y2="15" />
    <svg:line x1="9" x2="9" y1="9" y2="21" />
    <svg:line x1="15" x2="15" y1="9" y2="21" />
  `,
})
export class LucideSheet {}
