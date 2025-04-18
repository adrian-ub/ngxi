import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCommentIcon],svg[nrk-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3h22v17h-7.708l1.528 3h-2.245l-1.528-3H1zm20 15V5H3v13zM5 7h6v2H5z" clip-rule="evenodd"></svg:path>`,
})
export class NrkCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
