import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyVthoIcon],svg[cryptocurrency-vtho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m4.272-26.942h-5.763l-4.487 11.78h4.45l-3.94 10.104l12.18-14.3h-5.1l5.683-7.584z"></svg:path>`,
})
export class CryptocurrencyVthoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
