import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxArrowToBottomIcon],svg[bx-arrow-to-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h12v2H6zm5-14v8.586L6.707 8.293L5.293 9.707L12 16.414l6.707-6.707l-1.414-1.414L13 12.586V4z"></svg:path>`,
})
export class BxArrowToBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
