import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesArrowChevDownSolidIcon],svg[bubbles-arrow-chev-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.04 11.24a1.274 1.274 0 0 0 1.92 0l4.64-6.225A.636.636 0 0 0 13.09 4H2.913a.636.636 0 0 0-.51 1.015z"></svg:path>`,
})
export class BubblesArrowChevDownSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
