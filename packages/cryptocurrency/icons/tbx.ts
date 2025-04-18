import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyTbxIcon],svg[cryptocurrency-tbx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-.3-4.6c6.462 0 11.7-5.238 11.7-11.7S22.162 4 15.7 4S4 9.238 4 15.7s5.238 11.7 11.7 11.7m2.89-7.7l2.35-4l-2.62-4.48h-5.24l-2.62 4.48l2.35 4l2.89-4zm.86-10.4l3.74 6.4l-3.74 6.4h-7.49l-3.75-6.4l3.74-6.4z"></svg:path>`,
})
export class CryptocurrencyTbxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
