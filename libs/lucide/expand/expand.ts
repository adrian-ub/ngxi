import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideExpand],svg[lucide-expand]',
  host: {
    class: 'lucide lucide-expand',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m15 15 6 6" />
    <svg:path d="m15 9 6-6" />
    <svg:path d="M21 16.2V21h-4.8" />
    <svg:path d="M21 7.8V3h-4.8" />
    <svg:path d="M3 16.2V21h4.8" />
    <svg:path d="m3 21 6-6" />
    <svg:path d="M3 7.8V3h4.8" />
    <svg:path d="M9 9 3 3" />
  `,
})
export class LucideExpand {}
