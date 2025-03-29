import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTableCellsMerge],svg[lucide-table-cells-merge]',
  host: {
    class: 'lucide lucide-table-cells-merge',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 21v-6" />
    <svg:path d="M12 9V3" />
    <svg:path d="M3 15h18" />
    <svg:path d="M3 9h18" />
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
  `,
})
export class LucideTableCellsMerge {}
