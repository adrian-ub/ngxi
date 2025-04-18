import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCommentSquareIcon],svg[oi-comment-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.09 0C.03 0 0 .04 0 .09V5.9c0 .05.04.09.09.09H6l2 2V.08c0-.06-.04-.09-.09-.09H.1z"></svg:path>`,
})
export class OiCommentSquareIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
