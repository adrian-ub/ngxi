import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCommentXIcon],svg[bx-comment-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.707 13.707L12 11.414l2.293 2.293l1.414-1.414L13.414 10l2.293-2.293l-1.414-1.414L12 8.586L9.707 6.293L8.293 7.707L10.586 10l-2.293 2.293z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
