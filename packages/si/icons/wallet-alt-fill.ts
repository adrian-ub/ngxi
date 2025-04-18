import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siWalletAltFillIcon],svg[si-wallet-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#siWalletAltFill0)"><svg:path d="M17.6 4H5a1 1 0 1 1 0-2h12.6C21.132 2 24 4.868 24 8.4V17a1 1 0 1 1-2 0V8.4C22 5.972 20.028 4 17.6 4"></svg:path><svg:path fill-rule="evenodd" d="M17.6 6H4.4C3.075 6 2 7.164 2 8.6v9.8C2 19.836 3.075 21 4.4 21h13.2c1.325 0 2.4-1.164 2.4-2.6V8.6C20 7.164 18.925 6 17.6 6m-.6 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="siWalletAltFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiWalletAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
