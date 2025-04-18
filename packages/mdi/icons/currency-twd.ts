import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyTwdIcon],svg[mdi-currency-twd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h18v2h-6v6h6v2h-6a2 2 0 0 1-2-2v-6h-2.65l-4.62 8L4 20l4.04-7H3zm2-8h14v2H5z"></svg:path>`,
})
export class MdiCurrencyTwdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
