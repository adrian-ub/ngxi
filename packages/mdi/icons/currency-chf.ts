import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyChfIcon],svg[mdi-currency-chf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7 3h11v2H9v6h8v2H9v3h2v2H9v3H7v-3H5v-2h2V3z" fill="currentColor"></svg:path>`,
})
export class MdiCurrencyChfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
