import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBookmarkAddIcon],svg[ic-sharp-bookmark-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14l-7-3l-7 3V3h9a5.002 5.002 0 0 0 5 7.9z"></svg:path>`,
})
export class IcSharpBookmarkAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
