import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBookmarkPlusIcon],svg[jam-bookmark-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0-1 1v15l2.978-2.717a3 3 0 0 1 4.044 0L12 18V3a1 1 0 0 0-1-1zm0-2h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477L7.674 16.76a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18V3a3 3 0 0 1 3-3m5 8h2a1 1 0 0 1 0 2H8v2a1 1 0 0 1-2 0v-2H4a1 1 0 1 1 0-2h2V6a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamBookmarkPlusIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
