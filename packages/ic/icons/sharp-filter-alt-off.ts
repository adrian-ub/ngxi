import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterAltOffIcon],svg[ic-sharp-filter-alt-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.05 4H6.83l7.97 7.97zM2.81 2.81L1.39 4.22L10 13v7h4v-3.17l5.78 5.78l1.41-1.42z"></svg:path>`,
})
export class IcSharpFilterAltOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
