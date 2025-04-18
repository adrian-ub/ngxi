import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalHaskellIcon],svg[devicon-original-haskell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#463B63" d="M0 110.2L30.1 65L0 19.9h22.6L52.7 65l-30.1 45.1H0z"></svg:path><svg:path fill="#5E5187" d="M30.1 110.2L60.2 65L30.1 19.9h22.6l60.2 90.3H90.4L71.5 81.9l-18.8 28.2H30.1z"></svg:path><svg:path fill="#904F8C" d="m102.9 83.8l-10-15.1H128v15.1h-25.1zM87.8 61.3l-10-15.1H128v15.1H87.8z"></svg:path>`,
})
export class DeviconOriginalHaskellIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
