import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDoubleArrowRightIcon],svg[mage-double-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.36 19l5.763-5.763a1.74 1.74 0 0 0 0-2.474L5.36 5m7 14l5.763-5.763a1.74 1.74 0 0 0 0-2.474L12.36 5"></svg:path>`,
})
export class MageDoubleArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
