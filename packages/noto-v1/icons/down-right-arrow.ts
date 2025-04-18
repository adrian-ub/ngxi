import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1DownRightArrowIcon],svg[noto-v1-down-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M98.25 98.18L44.51 89.9l14.18-14.18l-28.94-28.93l16.96-16.96l28.94 28.93l14.32-14.32z"></svg:path>`,
})
export class NotoV1DownRightArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
