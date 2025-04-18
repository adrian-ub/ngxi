import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siDownTwoHeadedFillIcon],svg[si-down-two-headed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v8.586l1.293-1.293a1 1 0 0 1 1.414 1.414L13 15.414v2.172l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 17.586v-2.172l-2.707-2.707a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiDownTwoHeadedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
