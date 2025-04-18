import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleLeftDownIcon],svg[gg-corner-double-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.299 7.76l-5.019 4.88l-1.394-1.434l2.436-2.368l-6.02.015a2.4 2.4 0 0 0-2.394 2.406l.014 5.9l2.268-2.256l1.41 1.418l-4.962 4.937l-4.937-4.962l1.418-1.41L6.522 17.3l-.014-6.036a4.8 4.8 0 0 1 4.788-4.812l5.928-.014l-2.238-2.303l1.433-1.394z"></svg:path>`,
})
export class GgCornerDoubleLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
