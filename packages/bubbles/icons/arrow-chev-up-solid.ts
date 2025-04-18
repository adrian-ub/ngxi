import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesArrowChevUpSolidIcon],svg[bubbles-arrow-chev-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.963 4.44a1.273 1.273 0 0 0-1.92 0l-4.64 6.224a.636.636 0 0 0 .511 1.015h10.175a.636.636 0 0 0 .511-1.015z"></svg:path>`,
})
export class BubblesArrowChevUpSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
