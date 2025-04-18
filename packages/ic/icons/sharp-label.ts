import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLabelIcon],svg[ic-sharp-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.03 5L3 5.01v13.98l14.03.01L22 12z"></svg:path>`,
})
export class IcSharpLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
