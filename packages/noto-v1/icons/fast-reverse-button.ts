import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1FastReverseButtonIcon],svg[noto-v1-fast-reverse-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M121.76 29.01L66.84 60.72V29.01L6.24 64l60.6 34.99V67.28l54.92 31.71z"></svg:path>`,
})
export class NotoV1FastReverseButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
