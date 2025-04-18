import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyNgnIcon],svg[mdi-currency-ngn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h2V3h2l3.42 6H16V3h2v6h2v2h-2v2h2v2h-2v6h-2l-3.43-6H8v6H6v-6H4v-2h2v-2H4zm4 0h1.13L8 7.03zm0 2v2h3.42l-1.14-2zm8 6v-2h-1.15zm-3.44-6l1.15 2H16v-2z"></svg:path>`,
})
export class MdiCurrencyNgnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
