import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiHeavylargecircleIcon],svg[fxemoji-heavylargecircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF473E" d="M256 78.536c47.402 0 91.967 18.459 125.486 51.978c33.519 33.518 51.978 78.083 51.978 125.486s-18.459 91.967-51.978 125.486c-33.518 33.519-78.083 51.978-125.486 51.978s-91.967-18.459-125.486-51.978C96.996 347.967 78.536 303.402 78.536 256s18.459-91.967 51.978-125.486C164.033 96.996 208.598 78.536 256 78.536m0-68C120.434 10.536 10.536 120.434 10.536 256S120.434 501.464 256 501.464S501.464 391.566 501.464 256S391.566 10.536 256 10.536"></svg:path>`,
})
export class FxemojiHeavylargecircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
