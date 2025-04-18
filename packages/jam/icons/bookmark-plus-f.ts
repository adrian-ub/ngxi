import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBookmarkPlusFIcon],svg[jam-bookmark-plus-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8.858v-2a1 1 0 1 0-2 0v2H4a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2zm-5-8h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477l-2.978-2.717a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18.858v-15a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamBookmarkPlusFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
