import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurementFilledIcon],svg[tdesign-measurement-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 1H6v5h3.5v2H6v3h5v2H6v3h3.5v2H6v5h12z"></svg:path>`,
})
export class TdesignMeasurementFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
