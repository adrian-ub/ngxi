import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDoubleArrowDownIcon],svg[mage-double-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5.36l-5.763 5.763a1.74 1.74 0 0 1-2.474 0L5 5.36m14 7l-5.763 5.763a1.74 1.74 0 0 1-2.474 0L5 12.36"></svg:path>`,
})
export class MageDoubleArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
