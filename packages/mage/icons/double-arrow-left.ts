import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDoubleArrowLeftIcon],svg[mage-double-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18.64 19l-5.763-5.763a1.737 1.737 0 0 1 0-2.474L18.64 5m-7 14l-5.763-5.763a1.74 1.74 0 0 1 0-2.474L11.64 5"></svg:path>`,
})
export class MageDoubleArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
