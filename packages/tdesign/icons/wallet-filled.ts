import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWalletFilledIcon],svg[tdesign-wallet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a3 3 0 0 0-3 3v17h17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H5a1 1 0 1 1 0-2h15V2zm13 13h-3v-2h3z"></svg:path>`,
})
export class TdesignWalletFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
