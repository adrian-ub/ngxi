import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBrokenImageIcon],svg[ic-twotone-broken-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.99 15.41l-4-4l-4 4l-.99-.99V19h14v-6.57l-1.01-1.01zM5 11.59l.99 1l4-4l4 4l4-4.01L19 9.59V5H5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5v-4.58l.99.99l4-4l4 4l4-3.99L19 12.43zm0-9.41l-1.01-1.01l-4 4.01l-4-4l-4 4l-.99-1V5h14z"></svg:path>`,
})
export class IcTwotoneBrokenImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
