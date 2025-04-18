import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWallet2LineIcon],svg[ri-wallet-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 7V5h-16v14h16v-2h-8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-17-4h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m10 6v6h7V9zm2 2h3v2h-3z"></svg:path>`,
})
export class RiWallet2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
