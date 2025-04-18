import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBookmarkBorderIcon],svg[ic-sharp-bookmark-border-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5v18l7-3l7 3zm-2 15l-5-2.18L7 18V5h10z"></svg:path>`,
})
export class IcSharpBookmarkBorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
