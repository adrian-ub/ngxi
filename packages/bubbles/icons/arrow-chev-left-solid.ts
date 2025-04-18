import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesArrowChevLeftSolidIcon],svg[bubbles-arrow-chev-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.601 8.8a1.273 1.273 0 0 1 0-1.92l6.225-4.639a.636.636 0 0 1 1.015.511v10.175a.636.636 0 0 1-1.015.511z"></svg:path>`,
})
export class BubblesArrowChevLeftSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
