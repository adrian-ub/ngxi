import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCommentCheckIcon],svg[bx-comment-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.207 8.207l-1.414-1.414L11 11.586L8.707 9.293l-1.414 1.414L11 14.414z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
