import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMoveOutlineIcon],svg[bubbles-move-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 3.748l3-3l3 3m0 16.5l-3 3l-3-3m3-19.5v22.5m-8.25-8.25l-3-3l3-3m16.5 0l3 3l-3 3m-19.5-3h22.5"></svg:path>`,
})
export class BubblesMoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
