import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyKztIcon],svg[mdi-currency-kzt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14v2H5zm0 3h14v2h-6v13h-2V8H5z"></svg:path>`,
})
export class MdiCurrencyKztIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
