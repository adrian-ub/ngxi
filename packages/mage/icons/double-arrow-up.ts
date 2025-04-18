import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDoubleArrowUpIcon],svg[mage-double-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 18.64l5.763-5.763a1.74 1.74 0 0 1 2.474 0L19 18.64m-14-7l5.763-5.763a1.74 1.74 0 0 1 2.474 0L19 11.64"></svg:path>`,
})
export class MageDoubleArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
