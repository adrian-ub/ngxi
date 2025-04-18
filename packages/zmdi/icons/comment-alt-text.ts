import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentAltTextIcon],svg[zmdi-comment-alt-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v384l-86-85H43q-18 0-30.5-12.5T0 301V45q0-17 12.5-29.5T43 3zm-43 256v-43H85v43zm0-64v-43H85v43zm0-64V88H85v43z"></svg:path>`,
})
export class ZmdiCommentAltTextIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
