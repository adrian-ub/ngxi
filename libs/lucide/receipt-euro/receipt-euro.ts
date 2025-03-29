import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptEuro],svg[lucide-receipt-euro]',
  host: {
    class: 'lucide lucide-receipt-euro',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    />
    <svg:path d="M8 12h5" />
    <svg:path d="M16 9.5a4 4 0 1 0 0 5.2" />
  `,
})
export class LucideReceiptEuro {}
