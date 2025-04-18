import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsOutlineReceiptTaxIcon],svg[heroicons-outline-receipt-tax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16l3.5-2l3.5 2l3.5-2zM10 8.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m5 5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path>`,
})
export class HeroiconsOutlineReceiptTaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
