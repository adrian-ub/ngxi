import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCommentMinusIcon],svg[bxs-comment-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m-4 9H8V9h8z"></svg:path>`,
})
export class BxsCommentMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
