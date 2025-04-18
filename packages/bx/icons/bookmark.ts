import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBookmarkIcon],svg[bx-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2m0 16.553l-6-3.428l-6 3.428V4h12z"></svg:path>`,
})
export class BxBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
