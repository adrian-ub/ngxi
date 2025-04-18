import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1DownArrowIcon],svg[noto-v1-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M64 105.05L32.86 62.58h19.42V22.95h23.23v39.63h19.62z"></svg:path>`,
})
export class NotoV1DownArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
