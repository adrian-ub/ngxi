import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMoveIcon],svg[bx-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11h-5V6h3l-4-4l-4 4h3v5H6V8l-4 4l4 4v-3h5v5H8l4 4l4-4h-3v-5h5v3l4-4l-4-4z"></svg:path>`,
})
export class BxMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
