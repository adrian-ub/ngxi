import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1DigitZeroIcon],svg[noto-v1-digit-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M62.79 25C42.87 25 30 40.47 30 64.42s12.87 39.43 32.79 39.43s32.79-15.47 32.79-39.43C95.59 40.47 82.71 25 62.79 25m0 60.21c-9.53 0-12.91-11.2-12.91-20.79c0-9.58 3.38-20.78 12.91-20.78s12.92 11.2 12.92 20.78c0 9.59-3.39 20.79-12.92 20.79"></svg:path>`,
})
export class NotoV1DigitZeroIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
