import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPaddingIcon],svg[ic-sharp-padding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm6 6H7V7h2zm4 0h-2V7h2zm4 0h-2V7h2z"></svg:path>`,
})
export class IcSharpPaddingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
