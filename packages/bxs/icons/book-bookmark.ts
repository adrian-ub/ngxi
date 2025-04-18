import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBookBookmarkIcon],svg[bxs-book-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19q0-.15.024-.273c.112-.576.584-.717.988-.727H21V4a2 2 0 0 0-2-2m0 9l-2-1l-2 1V4h4z"></svg:path>`,
})
export class BxsBookBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
