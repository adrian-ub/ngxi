import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentAltIcon],svg[zmdi-comment-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m426 45l1 384l-86-85H43q-18 0-30.5-12.5T0 301V45q0-17 12.5-29.5T43 3h341q18 0 30 12.5T426 45"></svg:path>`,
})
export class ZmdiCommentAltIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
