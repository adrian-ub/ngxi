import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptIndianRupee],svg[lucide-receipt-indian-rupee]',
  host: {
    class: 'lucide lucide-receipt-indian-rupee',
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
    <svg:path d="M8 7h8" />
    <svg:path d="M12 17.5 8 15h1a4 4 0 0 0 0-8" />
    <svg:path d="M8 11h8" />
  `,
})
export class LucideReceiptIndianRupee {}
