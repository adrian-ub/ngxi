import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineVerticalShadesIcon],svg[ic-baseline-vertical-shades-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h20v-2zm-10 0V5h4v14z"></svg:path>`,
})
export class IcBaselineVerticalShadesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
