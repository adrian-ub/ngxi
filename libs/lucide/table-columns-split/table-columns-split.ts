import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTableColumnsSplit],svg[lucide-table-columns-split]',
  host: {
    class: 'lucide lucide-table-columns-split',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14 14v2" />
    <svg:path d="M14 20v2" />
    <svg:path d="M14 2v2" />
    <svg:path d="M14 8v2" />
    <svg:path d="M2 15h8" />
    <svg:path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" />
    <svg:path d="M2 9h8" />
    <svg:path d="M22 15h-4" />
    <svg:path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
    <svg:path d="M22 9h-4" />
    <svg:path d="M5 3v18" />
  `,
})
export class LucideTableColumnsSplit {}
