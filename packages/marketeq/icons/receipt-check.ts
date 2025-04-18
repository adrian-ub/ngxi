import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqReceiptCheckIcon],svg[marketeq-receipt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 20.833L25 25l8.333-8.333"></svg:path><svg:path stroke="#306CFE" d="M43.75 8.333v30.209a5.208 5.208 0 1 1-10.417 0v-5.209H10.417v-25A2.083 2.083 0 0 1 12.5 6.25h29.167a2.083 2.083 0 0 1 2.083 2.083M33.333 38.542v-5.209H6.25v5.209a5.21 5.21 0 0 0 5.208 5.208h27.084a5.21 5.21 0 0 1-5.209-5.208"></svg:path></svg:g>`,
})
export class MarketeqReceiptCheckIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
