import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurementIcon],svg[tdesign-measurement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1h12v22H6zm2 2v3h2.5v2H8v3h4v2H8v3h2.5v2H8v3h8V3z"></svg:path>`,
})
export class TdesignMeasurementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
