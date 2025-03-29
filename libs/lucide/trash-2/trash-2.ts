import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrash2],svg[lucide-trash-2]',
  host: {
    class: 'lucide lucide-trash-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 6h18" />
    <svg:path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <svg:path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <svg:line x1="10" x2="10" y1="11" y2="17" />
    <svg:line x1="14" x2="14" y1="11" y2="17" />
  `,
})
export class LucideTrash2 {}
