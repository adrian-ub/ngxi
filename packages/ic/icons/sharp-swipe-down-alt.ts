import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSwipeDownAltIcon],svg[ic-sharp-swipe-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4l4-4l-1.41-1.41L13 18.17z"></svg:path>`,
})
export class IcSharpSwipeDownAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
