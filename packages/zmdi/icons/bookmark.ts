import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBookmarkIcon],svg[zmdi-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0q18 0 30.5 12.5T299 43v341l-150-64L0 384V43q0-18 12.5-30.5T43 0z"></svg:path>`,
})
export class ZmdiBookmarkIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
