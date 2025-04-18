import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCollectionsBookmarkIcon],svg[ic-sharp-collections-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v16h16v-2H4zm18-4H6v16h16zm-2 10l-2.5-1.5L15 12V4h5z"></svg:path>`,
})
export class IcSharpCollectionsBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
