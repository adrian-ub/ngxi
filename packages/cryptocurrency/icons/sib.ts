import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencySibIcon],svg[cryptocurrency-sib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m0-28C9.373 4 4 9.373 4 16s5.373 12 12 12s12-5.373 12-12A12 12 0 0 0 16 4m4.176 16.527h-.488v2.732h-1.64v-2.732h-2.497v-1.015h2.537v-1.834a6.44 6.44 0 0 1-4.332.702c-.82-.195-1.639-.643-2.068-1.385a4.6 4.6 0 0 1-.586-2.38v-4.332h1.659v4.488c.039.975.663 1.951 1.62 2.244a5 5 0 0 0 3.687-.586c0-1.366-.02-3.414 0-6.146h1.678v9.23h.43z"></svg:path>`,
})
export class CryptocurrencySibIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
