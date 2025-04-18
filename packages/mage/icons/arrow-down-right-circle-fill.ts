import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownRightCircleFillIcon],svg[mage-arrow-down-right-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5 13.27a2 2 0 0 1-.42 1.23a.8.8 0 0 1-.16.22a1 1 0 0 1-.2.15a2 2 0 0 1-1.22.49H8.6a1 1 0 0 1 0-2h5L7.16 8.67a1 1 0 0 1 1.41-1.41l6.39 6.38v-5a1 1 0 1 1 2 0z"></svg:path>`,
})
export class MageArrowDownRightCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
