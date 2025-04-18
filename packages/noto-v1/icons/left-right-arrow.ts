import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1LeftRightArrowIcon],svg[noto-v1-left-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M44.3 51.91V31.85L.46 63.99L44.3 96.15V76.1h39.4v20.05L127.54 64L83.7 31.85v20.06z"></svg:path>`,
})
export class NotoV1LeftRightArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
