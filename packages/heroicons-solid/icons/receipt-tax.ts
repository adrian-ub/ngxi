import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidReceiptTaxIcon],svg[heroicons-solid-receipt-tax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2a2 2 0 0 0-2 2v14l3.5-2l3.5 2l3.5-2l3.5 2V4a2 2 0 0 0-2-2zm2.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m6.207.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414M12.5 10a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidReceiptTaxIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
