import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCaretRightSquareIcon],svg[bx-caret-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 17l6-5l-6-5z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path>`,
})
export class BxCaretRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
