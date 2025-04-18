import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyIlsIcon],svg[mdi-currency-ils-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16a5 5 0 0 1-5 5H8V9h2v10h7a3 3 0 0 0 3-3V3h2zm-6-8v7h-2V8a3 3 0 0 0-3-3H4v16H2V3h9a5 5 0 0 1 5 5"></svg:path>`,
})
export class MdiCurrencyIlsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
