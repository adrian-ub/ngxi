import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1WhiteMediumSmallSquareIcon],svg[noto-v1-white-medium-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e0e0e0" d="M40.03 40.03h47.95v47.95H40.03z"></svg:path>`,
})
export class NotoV1WhiteMediumSmallSquareIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
