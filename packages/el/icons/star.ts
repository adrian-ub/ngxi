import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elStarIcon],svg[el-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M961.359 1173.121L594.085 903.799l-374.367 259.374L362.365 730.65L0 454.756l455.436 2.008L605.848 26.879l138.827 433.765L1200 470.853L830.365 736.927z"></svg:path>`,
})
export class ElStarIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
