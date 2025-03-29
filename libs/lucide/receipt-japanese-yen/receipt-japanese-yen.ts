import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptJapaneseYen],svg[lucide-receipt-japanese-yen]',
  host: {
    class: 'lucide lucide-receipt-japanese-yen',
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
    <svg:path d="m12 10 3-3" />
    <svg:path d="m9 7 3 3v7.5" />
    <svg:path d="M9 11h6" />
    <svg:path d="M9 15h6" />
  `,
})
export class LucideReceiptJapaneseYen {}
