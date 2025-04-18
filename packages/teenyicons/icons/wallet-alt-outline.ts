import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsWalletAltOutlineIcon],svg[teenyicons-wallet-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 6V2.5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9m.93-3.5H9.5a2 2 0 1 0 0 4h4.93a.07.07 0 0 0 .07-.07V5.57a.07.07 0 0 0-.07-.07Z"></svg:path>`,
})
export class TeenyiconsWalletAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
