import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1WhiteSmallSquareIcon],svg[noto-v1-white-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e0e0e0" d="M50.04 50.04h27.91v27.92H50.04z"></svg:path>`,
})
export class NotoV1WhiteSmallSquareIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
