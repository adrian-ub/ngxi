import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBookmarkAddedIcon],svg[ic-sharp-bookmark-added-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 21l-7-3l-7 3V3h9a5.002 5.002 0 0 0 5 7.9zM17.83 9L15 6.17l1.41-1.41l1.41 1.41l3.54-3.54l1.41 1.41z"></svg:path>`,
})
export class IcSharpBookmarkAddedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
