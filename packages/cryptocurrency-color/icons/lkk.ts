import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorLkkIcon],svg[cryptocurrency-color-lkk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#9D01EB"></svg:circle><svg:path fill="#FFF" fill-rule="nonzero" d="M10.005 26v-3.656L16 16.24l5.976 6.105V26L16 19.894zM5 13.633h8.469L16 16.24H7.531zm22 0l-2.531 2.606H16V5l2.531 2.586v6.047z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorLkkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
