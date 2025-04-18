import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPineTreeSolidIcon],svg[bubbles-pine-tree-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.408 17.34l-3.614-5.626a.598.598 0 0 1 .504-.924h.902a1.2 1.2 0 0 0 .91-1.98l-7.2-8.4a1.236 1.236 0 0 0-1.82 0l-7.2 8.4a1.2 1.2 0 0 0 .91 1.99h.902a.598.598 0 0 1 .504.924L2.592 17.34A1.2 1.2 0 0 0 3.6 19.2h6a.6.6 0 0 1 .6.6v2.4a1.8 1.8 0 1 0 3.6 0v-2.4a.6.6 0 0 1 .6-.6h6a1.2 1.2 0 0 0 1.008-1.85z"></svg:path>`,
})
export class BubblesPineTreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
