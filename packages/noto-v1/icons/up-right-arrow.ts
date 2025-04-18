import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1UpRightArrowIcon],svg[noto-v1-up-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M98.18 29.76L89.9 83.49L75.72 69.31L46.78 98.24L29.82 81.28l28.94-28.93l-14.32-14.33z"></svg:path>`,
})
export class NotoV1UpRightArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
