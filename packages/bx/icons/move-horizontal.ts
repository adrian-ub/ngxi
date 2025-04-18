import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMoveHorizontalIcon],svg[bx-move-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11H7V7l-5 5l5 5v-4h10v4l5-5l-5-5z"></svg:path>`,
})
export class BxMoveHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
