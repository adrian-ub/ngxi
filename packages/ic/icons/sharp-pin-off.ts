import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPinOffIcon],svg[ic-sharp-pin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 9l7 7h-3v4l-1 3l-1-3v-4H6v-3l3-3zm8-7v2l-2 1v5l3 3v2.461L12.27 9.73L9 6.46V5L7 4V2z"></svg:path><svg:path fill="currentColor" d="M2.27 2.27L1 3.54L20.46 23l1.27-1.27L11 11z"></svg:path>`,
})
export class IcSharpPinOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
