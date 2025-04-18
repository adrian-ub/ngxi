import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsCommentXIcon],svg[bx-bxs-comment-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3.294 11.543l-1.414 1.414l-3.293-3.292l-3.292 3.292l-1.414-1.414l3.292-3.292l-3.292-3.293l1.414-1.414l3.292 3.292l3.293-3.292l1.414 1.414l-3.292 3.293l3.292 3.292z" fill="currentColor"></svg:path>`,
})
export class BxBxsCommentXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
