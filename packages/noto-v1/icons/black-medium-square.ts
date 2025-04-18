import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1BlackMediumSquareIcon],svg[noto-v1-black-medium-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#212121" d="M23 23h82v82H23z"></svg:path>`,
})
export class NotoV1BlackMediumSquareIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
