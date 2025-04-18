import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMoveRightOutlineIcon],svg[bubbles-move-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.75 11.998h-18M15 8.248l3.75 3.75l-3.75 3.75m8.25-15v22.5"></svg:path>`,
})
export class BubblesMoveRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
