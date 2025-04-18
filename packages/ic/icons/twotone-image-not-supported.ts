import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneImageNotSupportedIcon],svg[ic-twotone-image-not-supported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.83 5H19v11.17zm8.34 14l-2-2H6l3-4l2 2.72l.84-1.05L5 7.83V19z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83zm14.66 20.31L18.17 21H5c-1.1 0-2-.9-2-2V5.83L.69 3.51L2.1 2.1l1.49 1.49L5 5l8.11 8.11l2.69 2.69L19 19l1.41 1.41l1.49 1.49zM16.17 19l-2-2H6l3-4l2 2.72l.84-1.05L5 7.83V19z"></svg:path>`,
})
export class IcTwotoneImageNotSupportedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
