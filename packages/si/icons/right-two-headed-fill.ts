import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siRightTwoHeadedFillIcon],svg[si-right-two-headed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.293 8.293a1 1 0 0 1 1.414 0L15.414 11h2.172l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 13h-2.172l-2.707 2.707a1 1 0 0 1-1.414-1.414L12.586 13H4a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiRightTwoHeadedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
