import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siUpTwoHeadedLineIcon],svg[si-up-two-headed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20V4m0 0L9 7m3-3l3 3m-6 5l3-3l3 3"></svg:path>`,
})
export class SiUpTwoHeadedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
