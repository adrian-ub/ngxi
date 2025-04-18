import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCodeReviewIcon],svg[codicon-code-review-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.5 2h-13l-.5.5v9l.5.5H4v2.5l.854.354L7.707 12H14.5l.5-.5v-9zm-.5 9H7.5l-.354.146L5 13.293V11.5l-.5-.5H2V3h12z"></svg:path><svg:path d="M7.079 5.205L5.262 7.033l1.816 1.82l-.707.707L4.2 7.386v-.707L6.37 4.5zm2.621-.7l-.7.709l1.826 1.819l-1.831 1.82l.705.709l2.189-2.173V6.68z"></svg:path></svg:g>`,
})
export class CodiconCodeReviewIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
