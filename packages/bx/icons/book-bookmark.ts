import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBookBookmarkIcon],svg[bx-book-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2.01H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.998 5 19.815 5 19.01q0-.15.024-.273c.112-.575.583-.717.987-.727H20c.018 0 .031-.009.049-.01H21V4.01c0-1.103-.897-2-2-2m0 14H5v-11c0-.806.55-.988 1-1h7v7l2-1l2 1v-7h2z"></svg:path>`,
})
export class BxBookBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
