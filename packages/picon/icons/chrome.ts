import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChromeIcon],svg[picon-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m8-2Q3 1 2 3L1 1q0 5 3 5L3 8q4-2 3-5M3 5V3h2v2"></svg:path>`,
})
export class PiconChromeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
