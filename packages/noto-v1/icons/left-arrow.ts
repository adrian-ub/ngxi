import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1LeftArrowIcon],svg[noto-v1-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="m22.95 64l42.46-31.14v19.42h39.64v23.23H65.41v19.61z"></svg:path>`,
})
export class NotoV1LeftArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
