import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epWalletFilledIcon],svg[ep-wallet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96m-80-544l128 160H384z"></svg:path>`,
})
export class EpWalletFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
