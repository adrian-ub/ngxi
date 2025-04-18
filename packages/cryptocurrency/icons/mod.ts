import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyModIcon],svg[cryptocurrency-mod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m6.985-10.993V8.08l-6.312 6.45zM9 7v17.985l8.77-8.998l-8.466-8.675z"></svg:path><svg:path fill="currentColor" d="M22.985 21.007V8.08l-6.312 6.449z" opacity=".5"></svg:path>`,
})
export class CryptocurrencyModIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
