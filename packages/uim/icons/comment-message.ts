import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCommentMessageIcon],svg[uim-comment-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"></svg:path><svg:path fill="currentColor" d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20M9 7h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m2-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m0-8H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2"></svg:path>`,
})
export class UimCommentMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
