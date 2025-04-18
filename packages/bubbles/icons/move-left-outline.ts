import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMoveLeftOutlineIcon],svg[bubbles-move-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 11.998h18M9 8.248l-3.75 3.75L9 15.748M.75.748v22.5"></svg:path>`,
})
export class BubblesMoveLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
