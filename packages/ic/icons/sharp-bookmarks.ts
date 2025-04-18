import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBookmarksIcon],svg[ic-sharp-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 18l2 1V1H7v2h12zM17 5H3v18l7-3l7 3z"></svg:path>`,
})
export class IcSharpBookmarksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
