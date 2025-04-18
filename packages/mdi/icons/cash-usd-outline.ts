import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCashUsdOutlineIcon],svg[mdi-cash-usd-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 18H4V6h16m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-9 13h2v-1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3v-1h4V8h-2V7h-2v1h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3v1H9v2h2v1z" fill="currentColor"></svg:path>`,
})
export class MdiCashUsdOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
