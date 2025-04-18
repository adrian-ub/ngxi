import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCommentDotsIcon],svg[bxs-comment-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M9 12a2 2 0 1 1 .001-4.001A2 2 0 0 1 9 12m6 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 15 12"></svg:path>`,
})
export class BxsCommentDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
