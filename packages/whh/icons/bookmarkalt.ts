import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBookmarkaltIcon],svg[whh-bookmarkalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024L384 800L64 1024q-27 0-45.5-18.5T0 960V128q0-53 37.5-90.5T128 0h512q53 0 90.5 37.5T768 128v832q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhBookmarkaltIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
