import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBrushOffIcon],svg[mdi-brush-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-8.4-8.4l-.6.7L9 12.2l.7-.7L1.1 3l1.3-1.3l19.7 19.7zM7 14c-1.7 0-3 1.3-3 3c0 1.3-1.2 2-2 2c.9 1.2 2.5 2 4 2c2.2 0 4-1.8 4-4c0-1.7-1.3-3-3-3m13.7-8c.4-.4.4-1 0-1.4l-1.3-1.3c-.4-.4-1-.4-1.4 0L12.2 9l2.8 2.8z"></svg:path>`,
})
export class MdiBrushOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
