import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLayoutList],svg[lucide-layout-list]',
  host: {
    class: 'lucide lucide-layout-list',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="7" height="7" x="3" y="3" rx="1" />
    <svg:rect width="7" height="7" x="3" y="14" rx="1" />
    <svg:path d="M14 4h7" />
    <svg:path d="M14 9h7" />
    <svg:path d="M14 15h7" />
    <svg:path d="M14 20h7" />
  `,
})
export class LucideLayoutList {}
