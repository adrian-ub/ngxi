import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiCommentFilledIcon],svg[weui-comment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11 19l-2.293 2.293A1 1 0 0 1 7 20.586V19H3.5A1.5 1.5 0 0 1 2 17.5v-12A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v12a1.5 1.5 0 0 1-1.5 1.5z"></svg:path>`,
})
export class WeuiCommentFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
