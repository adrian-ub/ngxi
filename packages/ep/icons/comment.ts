import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epCommentIcon],svg[ep-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 504a56 56 0 1 1 0-112a56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112a56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112a56 56 0 0 1 0 112M128 128v640h192v160l224-160h352V128z"></svg:path>`,
})
export class EpCommentIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
