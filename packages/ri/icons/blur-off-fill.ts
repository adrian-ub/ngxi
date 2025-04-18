import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBlurOffFillIcon],svg[ri-blur-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.432 6.843L1.394 2.804L2.808 1.39l19.799 19.8l-1.415 1.413l-3.038-3.038A9 9 0 0 1 5.432 6.843m2.811-2.817L12 .269l6.364 6.364a9 9 0 0 1 2.05 9.564z"></svg:path>`,
})
export class RiBlurOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
