import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowDiagonalBottomRightIcon],svg[ix-arrow-diagonal-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m165.49 135.32l154.509 154.509v-97.83h42.667v170.667H192V320l97.829-.001l-154.509-154.51z"></svg:path>`,
})
export class IxArrowDiagonalBottomRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
