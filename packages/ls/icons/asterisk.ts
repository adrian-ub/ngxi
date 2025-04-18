import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsAsteriskIcon],svg[ls-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m311 59l37 62l-158 58l158 60l-37 62l-129-108l28 167h-73l30-167L36 301L0 239l160-60L0 121l36-62l131 108L137 0h73l-28 167z"></svg:path>`,
})
export class LsAsteriskIcon {
  readonly viewBox = input("0 0 348 719")
  readonly width = input("0.49em")
  readonly height = input("1em")
}
