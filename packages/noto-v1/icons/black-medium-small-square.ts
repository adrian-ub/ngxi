import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1BlackMediumSmallSquareIcon],svg[noto-v1-black-medium-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#212121" d="M40.03 40.02h47.95v47.95H40.03z"></svg:path>`,
})
export class NotoV1BlackMediumSmallSquareIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
