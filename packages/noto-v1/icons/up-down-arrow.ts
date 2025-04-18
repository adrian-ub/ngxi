import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1UpDownArrowIcon],svg[noto-v1-up-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M76.09 44.31h20.06L64 .46L31.85 44.31H51.9V83.7H31.85L64 127.54L96.15 83.7H76.09z"></svg:path>`,
})
export class NotoV1UpDownArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
