import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsFlipVerticalFilledIcon],svg[bitcoin-icons-flip-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 4.25a.75.75 0 0 1 .75.75v12.227l2.227-2.163a.75.75 0 1 1 1.045 1.076l-3.5 3.398a.75.75 0 0 1-1.045 0l-3.5-3.398a.75.75 0 1 1 1.045-1.076l2.228 2.162V5a.75.75 0 0 1 .75-.75m8.477.212a.75.75 0 0 1 1.045 0l3.5 3.398a.75.75 0 0 1-1.045 1.076L17.25 6.774V19a.75.75 0 0 1-1.5 0V6.774l-2.228 2.162a.75.75 0 0 1-1.045-1.076z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsFlipVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
