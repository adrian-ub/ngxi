import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1UpLeftArrowIcon],svg[noto-v1-up-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="m29.75 29.82l53.73 8.28l-14.17 14.18l28.94 28.94l-16.96 16.96l-28.94-28.94l-14.33 14.33z"></svg:path>`,
})
export class NotoV1UpLeftArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
