import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptCent],svg[lucide-receipt-cent]',
  host: {
    class: 'lucide lucide-receipt-cent',
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
    <svg:path d="M12 6.5v11" />
    <svg:path d="M15 9.4a4 4 0 1 0 0 5.2" />
  `,
})
export class LucideReceiptCent {}
