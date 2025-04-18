import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1DownLeftArrowIcon],svg[noto-v1-down-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="m29.82 98.25l8.28-53.74l14.18 14.18l28.94-28.94l16.96 16.97l-28.94 28.93l14.32 14.33z"></svg:path>`,
})
export class NotoV1DownLeftArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
