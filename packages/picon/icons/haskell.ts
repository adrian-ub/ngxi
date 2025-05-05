import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHaskellIcon],svg[picon-haskell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4.5H6.5L6 4h2m0-1H5l.5.5H8M2 6l2-2l-2-2h1l4 4H6L4.5 4.5L3 6M0 6l2-2l-2-2h1l2 2l-2 2"></svg:path>`,
})
export class PiconHaskellIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
