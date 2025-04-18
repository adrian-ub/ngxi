import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurement1Icon],svg[tdesign-measurement-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h10v10h10v10H2zm2 2v2.5h2.004v2H4V11h2.004v2H4v2.5h2.004v2H4V20h2.5v-1.967h2V20H11v-1.967h2V20h2.5v-1.967h2V20H20v-6H10V4z"></svg:path>`,
})
export class TdesignMeasurement1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
