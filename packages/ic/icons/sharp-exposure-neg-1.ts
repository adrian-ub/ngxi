import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpExposureNeg1Icon],svg[ic-sharp-exposure-neg-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11v2h8v-2zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3z"></svg:path>`,
})
export class IcSharpExposureNeg1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
