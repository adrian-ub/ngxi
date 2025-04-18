import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineDensityLargeIcon],svg[ic-outline-density-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm0 16h18v2H3z"></svg:path>`,
})
export class IcOutlineDensityLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
