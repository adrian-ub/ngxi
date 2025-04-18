import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWallet3LineIcon],svg[ri-wallet-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 7h1v10h-1v3a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-2 10h-6a5 5 0 0 1 0-10h6V5h-16v14h16zm1-2V9h-7a3 3 0 1 0 0 6zm-7-4h3v2h-3z"></svg:path>`,
})
export class RiWallet3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
