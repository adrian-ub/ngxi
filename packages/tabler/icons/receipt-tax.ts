import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerReceiptTaxIcon],svg[tabler-receipt-tax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m9 14l6-6"></svg:path><svg:circle cx="9.5" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="13.5" r=".5" fill="currentColor"></svg:circle><svg:path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2l-2 2l-2-2l-2 2l-2-2z"></svg:path></svg:g>`,
})
export class TablerReceiptTaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
