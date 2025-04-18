import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCommentEditIcon],svg[bx-comment-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.771 9.123l-1.399-1.398l-3.869 3.864v1.398h1.398zM14.098 6l1.398 1.398l-1.067 1.067l-1.398-1.398z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
