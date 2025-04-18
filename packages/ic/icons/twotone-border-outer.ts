import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBorderOuterIcon],svg[ic-twotone-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h2v2h-2zm0-4h2v2h-2zm10-4H3v18h18zm-2 16H5V5h14zm-4-8h2v2h-2zm-8 0h2v2H7zm4 4h2v2h-2z"></svg:path>`,
})
export class IcTwotoneBorderOuterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
