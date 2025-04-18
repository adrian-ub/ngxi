import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilCommentIcon],svg[il-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M718 5q10 0 17 7t6 17v657q0 5-3 6t-7-1L579 538H23q-10 0-16-7t-7-16V29q0-10 7-17t16-7z"></svg:path>`,
})
export class IlCommentIcon {
  readonly viewBox = input("0 0 750 820")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
