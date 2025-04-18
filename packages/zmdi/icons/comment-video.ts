import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentVideoIcon],svg[zmdi-comment-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zm-43 256V88l-85 68V88H85v171h171v-69z"></svg:path>`,
})
export class ZmdiCommentVideoIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
