import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTableRowsSplit],svg[lucide-table-rows-split]',
  host: {
    class: 'lucide lucide-table-rows-split',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14 10h2" />
    <svg:path d="M15 22v-8" />
    <svg:path d="M15 2v4" />
    <svg:path d="M2 10h2" />
    <svg:path d="M20 10h2" />
    <svg:path d="M3 19h18" />
    <svg:path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" />
    <svg:path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" />
    <svg:path d="M8 10h2" />
    <svg:path d="M9 22v-8" />
    <svg:path d="M9 2v4" />
  `,
})
export class LucideTableRowsSplit {}
