import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCompassCalibrationIcon],svg[ic-sharp-compass-calibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="17" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 3C8.1 3 4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 10-.01l5-5C19.44 4.59 15.9 3 12 3"></svg:path>`,
})
export class IcSharpCompassCalibrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
