import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderOuterIcon],svg[ic-sharp-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-2v2h2zm0 4h-2v2h2zm4 0h-2v2h2zM3 3v18h18V3zm16 16H5V5h14zm-6-4h-2v2h2zm-4-4H7v2h2z"></svg:path>`,
})
export class IcSharpBorderOuterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
