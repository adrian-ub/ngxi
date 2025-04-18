import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongDownIcon],svg[gg-arrow-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.013 19.162l1.812-1.822l1.418 1.41l-4.231 4.255l-4.255-4.231l1.41-1.418l1.846 1.834L10.998.997l2-.002z"></svg:path>`,
})
export class GgArrowLongDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
