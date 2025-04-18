import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCommentDetailIcon],svg[bxs-comment-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1.999H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2m-6 11H7v-2h7zm3-4H7v-2h10z"></svg:path>`,
})
export class BxsCommentDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
