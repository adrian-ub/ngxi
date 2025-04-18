import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentMoreIcon],svg[zmdi-comment-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zM149 195v-43h-42v43zm86 0v-43h-43v43zm85 0v-43h-43v43z"></svg:path>`,
})
export class ZmdiCommentMoreIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
