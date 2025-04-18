import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpRightSquareFillIcon],svg[mage-arrow-up-right-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.86 13.16a1 1 0 1 1-2 0V10.3l-6.22 6.22a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.41l6.2-6.2H8.84a1 1 0 0 1 0-2h6.24a2 2 0 0 1 1.28.46a1 1 0 0 1 .29.29a2 2 0 0 1 .46 1.28z"></svg:path>`,
})
export class MageArrowUpRightSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
