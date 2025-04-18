import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBorderOuterIcon],svg[bx-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2v2h-2zm0 8h2v2h-2zm-4-4h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M19 3H3v18h18V3zm0 4v12H5V5h14z"></svg:path>`,
})
export class BxBorderOuterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
