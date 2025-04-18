import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowDiagonalBottomLeftIcon],svg[ix-arrow-diagonal-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M346.51 135.32L192.001 289.829v-97.83h-42.667v170.667H320V320l-97.829-.001l154.509-154.51z"></svg:path>`,
})
export class IxArrowDiagonalBottomLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
