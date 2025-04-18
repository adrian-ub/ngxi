import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightCurrencyRubIcon],svg[mdi-light-currency-rub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v-5H6v-1h1v-3H6v-1h1V4h7a4 4 0 0 1 4 4a4 4 0 0 1-4 4H8v3h6v1H8v5zm1-10h6a3 3 0 0 0 3-3a3 3 0 0 0-3-3H8z"></svg:path>`,
})
export class MdiLightCurrencyRubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
