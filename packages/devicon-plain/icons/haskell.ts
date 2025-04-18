import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainHaskellIcon],svg[devicon-plain-haskell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 110.2L30.1 65L0 19.9h22.6L52.7 65l-30.1 45.1H0z"></svg:path><svg:path fill="currentColor" d="M30.1 110.2L60.2 65L30.1 19.9h22.6l60.2 90.3H90.4L71.5 81.9l-18.8 28.2H30.1zm72.8-26.4l-10-15.1H128v15.1zM87.8 61.3l-10-15.1H128v15.1z"></svg:path>`,
})
export class DeviconPlainHaskellIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
