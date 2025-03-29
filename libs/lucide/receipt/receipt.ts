import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceipt],svg[lucide-receipt]',
  host: {
    class: 'lucide lucide-receipt',
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
    <svg:path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <svg:path d="M12 17.5v-11" />
  `,
})
export class LucideReceipt {}
