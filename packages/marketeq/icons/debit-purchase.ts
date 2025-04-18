import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDebitPurchaseIcon],svg[marketeq-debit-purchase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M30.313 30.208h-.209m4.375 0h-.208z"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M43.75 18.75H6.25"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDebitPurchaseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
