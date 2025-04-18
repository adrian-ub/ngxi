import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNearMeIcon],svg[ic-sharp-near-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98z"></svg:path>`,
})
export class IcSharpNearMeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
