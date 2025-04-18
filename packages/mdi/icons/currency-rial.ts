import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyRialIcon],svg[mdi-currency-rial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h2v2h-2zm3 0h2v2h-2zM9 4h2v11a4 4 0 0 1-4 4H5a3 3 0 0 1-3-3v-4h2v4a1 1 0 0 0 1 1h2c1.11 0 2-.89 2-2zm3 0h2v9h3V8h2v5c0 1.11-.89 2-2 2h-3c-1.11 0-2-.89-2-2zm8 6h2v7a3 3 0 0 1-3 3h-2v-2h2a1 1 0 0 0 1-1z"></svg:path>`,
})
export class MdiCurrencyRialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
