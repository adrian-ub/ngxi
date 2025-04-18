import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGasIcon],svg[token-branded-gas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedGas0)" d="m19.676 17.922l-6.353-2.934V8.49l6.353-2.232zm-9 3.078l-6.353-2.862V6.564l6.353 2.862zm0-12.024L4.567 6.159L13.5 3l6.077 2.826z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedGas0" x1="4.665" x2="15.728" y1="18.41" y2="8.872" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#BEEA2E"></svg:stop><svg:stop offset="1" stop-color="#52BA00"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedGasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
