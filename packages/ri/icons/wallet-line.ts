import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWalletLineIcon],svg[ri-wallet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.005 7h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h15zm-14 2v10h16V9zm0-4v2h12V5zm11 8h3v2h-3z"></svg:path>`,
})
export class RiWalletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
