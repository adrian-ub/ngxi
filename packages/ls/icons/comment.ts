import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsCommentIcon],svg[ls-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 9h557c44 0 80 36 80 80v338c0 44-36 80-80 80H531l5 137c0 33-18 41-42 18L337 507H80c-44 0-80-36-80-80V89C0 45 36 9 80 9"></svg:path>`,
})
export class LsCommentIcon {
  readonly viewBox = input("0 0 717 676")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
