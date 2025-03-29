import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptRussianRuble],svg[lucide-receipt-russian-ruble]',
  host: {
    class: 'lucide lucide-receipt-russian-ruble',
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
    <svg:path d="M8 15h5" />
    <svg:path d="M8 11h5a2 2 0 1 0 0-4h-3v10" />
  `,
})
export class LucideReceiptRussianRuble {}
