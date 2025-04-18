import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCommentAltMessageIcon],svg[uim-comment-alt-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m0 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"></svg:path><svg:path fill="currentColor" d="M19 2H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h11.586l3.707 3.707A1 1 0 0 0 22 21V5a3.003 3.003 0 0 0-3-3m-2 11H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m0-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2" opacity=".5"></svg:path>`,
})
export class UimCommentAltMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
