import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentListIcon],svg[zmdi-comment-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zM128 259v-43H85v43zm0-64v-43H85v43zm0-64V88H85v43zm149 128v-43H171v43zm64-64v-43H171v43zm0-64V88H171v43z"></svg:path>`,
})
export class ZmdiCommentListIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
