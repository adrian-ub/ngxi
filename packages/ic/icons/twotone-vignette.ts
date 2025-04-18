import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneVignetteIcon],svg[ic-twotone-vignette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h18V5H3zm9-13c4.42 0 8 2.69 8 6s-3.58 6-8 6s-8-2.69-8-6s3.58-6 8-6" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zm-9-1c4.42 0 8-2.69 8-6s-3.58-6-8-6s-8 2.69-8 6s3.58 6 8 6m0-10c3.25 0 6 1.83 6 4s-2.75 4-6 4s-6-1.83-6-4s2.75-4 6-4"></svg:path>`,
})
export class IcTwotoneVignetteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
