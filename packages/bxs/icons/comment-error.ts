import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCommentErrorIcon],svg[bxs-comment-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m-7 13h-2v-2h2zm0-4h-2V5h2z"></svg:path>`,
})
export class BxsCommentErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
