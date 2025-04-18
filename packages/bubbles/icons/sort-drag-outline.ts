import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSortDragOutlineIcon],svg[bubbles-sort-drag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 16h19.5M2 8h19.5"></svg:path>`,
})
export class BubblesSortDragOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
