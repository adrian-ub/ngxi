import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesCursorOutlineIcon],svg[bubbles-cursor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1.816 2.8l8.428 19.072a.75.75 0 0 0 1.411-.112l1.884-7.158a1.5 1.5 0 0 1 1.068-1.07l7.158-1.883a.75.75 0 0 0 .113-1.411L2.806 1.814a.75.75 0 0 0-.99.986"></svg:path>`,
})
export class BubblesCursorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
