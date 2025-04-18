import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurrencyMntIcon],svg[mdi-currency-mnt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5v3.62l4-1.45v2.12l-4 1.45v1.76l4-1.43v2.13l-4 1.45V21h-2v-5.62l-4 1.46v-2.13l4-1.47v-1.77l-4 1.45V10.8l4-1.45V5H5V3h14v2z"></svg:path>`,
})
export class MdiCurrencyMntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
