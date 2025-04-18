import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1WhiteMediumSquareIcon],svg[noto-v1-white-medium-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e0e0e0" d="M23 23h82v82H23z"></svg:path>`,
})
export class NotoV1WhiteMediumSquareIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
