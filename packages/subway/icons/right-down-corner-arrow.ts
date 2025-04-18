import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRightDownCornerArrowIcon],svg[subway-right-down-corner-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m511.9 186.1l-93.1-93V349L69.8 0L0 69.8l349 349H93.1l93 93.1l325.9.1z"></svg:path>`,
})
export class SubwayRightDownCornerArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
