import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSwipeLeftAltIcon],svg[ic-sharp-swipe-left-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4l4 4l1.41-1.41L5.83 13z"></svg:path>`,
})
export class IcSharpSwipeLeftAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
