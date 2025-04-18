import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyLkkIcon],svg[cryptocurrency-lkk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-5.995-6L16 19.894L21.976 26v-3.656L16 16.24l-5.995 6.105zM5 13.633l2.531 2.606H16l-2.531-2.606zm22 0h-8.469V7.586L16 5v11.239h8.469z"></svg:path>`,
})
export class CryptocurrencyLkkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
