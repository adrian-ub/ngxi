import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siRightTwoHeadedLineIcon],svg[si-right-two-headed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-3-3m3 3l-3 3m-5-6l3 3l-3 3"></svg:path>`,
})
export class SiRightTwoHeadedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
