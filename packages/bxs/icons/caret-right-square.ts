import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCaretRightSquareIcon],svg[bxs-caret-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2m5-14l6 5l-6 5z"></svg:path>`,
})
export class BxsCaretRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
