import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptSwissFranc],svg[lucide-receipt-swiss-franc]',
  host: {
    class: 'lucide lucide-receipt-swiss-franc',
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
    <svg:path d="M10 17V7h5" />
    <svg:path d="M10 11h4" />
    <svg:path d="M8 15h5" />
  `,
})
export class LucideReceiptSwissFranc {}
