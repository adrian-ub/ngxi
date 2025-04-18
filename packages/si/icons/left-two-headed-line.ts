import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siLeftTwoHeadedLineIcon],svg[si-left-two-headed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l3-3m-3 3l3 3m5-6l-3 3l3 3"></svg:path>`,
})
export class SiLeftTwoHeadedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
