import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseMonthlyAmountButtonIcon],svg[openmoji-japanese-monthly-amount-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M13.7 12h44.7a1.686 1.686 0 0 1 1.7 1.7v44.7a1.686 1.686 0 0 1-1.7 1.7H13.7a1.686 1.686 0 0 1-1.7-1.7V13.7a1.63 1.63 0 0 1 1.7-1.7"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="M13.7 12h44.7a1.686 1.686 0 0 1 1.7 1.7v44.7a1.686 1.686 0 0 1-1.7 1.7H13.7a1.686 1.686 0 0 1-1.7-1.7V13.7a1.63 1.63 0 0 1 1.7-1.7Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25 39h22m-22-9h22m-22-9h22m-22 0v18c0 5-1 9-4 12m26-30v28a2.006 2.006 0 0 1-2 2h-6"></svg:path></svg:g>`,
})
export class OpenmojiJapaneseMonthlyAmountButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
