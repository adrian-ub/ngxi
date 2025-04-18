import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorNulsIcon],svg[cryptocurrency-color-nuls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#82bd39"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="M14.403 19.36L16 21.464V26l-6-2.663V11.619c0-.173.077-.338.212-.453l.683-.585a.636.636 0 0 1 .923.097l5.465 7.164l3.019 1.846v-9.88l-2.668-1.331l-.13 6.196l-1.412-1.873l-.064-6.8L22 8.779v11.664l-1.357 1.118l-4.274-2.387l-4.744-6.223l-.065 9.454l2.825 1.447z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorNulsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
