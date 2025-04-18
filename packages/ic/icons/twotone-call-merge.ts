import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneCallMergeIcon],svg[ic-twotone-call-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.997 20.41l-3.408-3.407l1.4-1.407l3.41 3.408zM5.59 19L7 20.41l6-6V8h3.5L12 3.5L7.5 8H11v5.59z"></svg:path>`,
})
export class IcTwotoneCallMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
