import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptText],svg[lucide-receipt-text]',
  host: {
    class: 'lucide lucide-receipt-text',
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
    <svg:path d="M14 8H8" />
    <svg:path d="M16 12H8" />
    <svg:path d="M13 16H8" />
  `,
})
export class LucideReceiptText {}
