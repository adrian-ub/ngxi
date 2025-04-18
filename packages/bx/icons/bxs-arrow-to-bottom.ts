import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsArrowToBottomIcon],svg[bx-bxs-arrow-to-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 18h12v2H6zm5-14v6H6l6 6l6-6h-5V4z" fill="currentColor"></svg:path>`,
})
export class BxBxsArrowToBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
