import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideReceiptPoundSterling],svg[lucide-receipt-pound-sterling]',
  host: {
    class: 'lucide lucide-receipt-pound-sterling',
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
    <svg:path d="M8 13h5" />
    <svg:path d="M10 17V9.5a2.5 2.5 0 0 1 5 0" />
    <svg:path d="M8 17h7" />
  `,
})
export class LucideReceiptPoundSterling {}
