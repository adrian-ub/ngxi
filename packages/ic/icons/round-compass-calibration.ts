import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundCompassCalibrationIcon],svg[ic-round-compass-calibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="17" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 3C8.49 3 5.28 4.29 2.8 6.41a1.01 1.01 0 0 0-.06 1.48l3.6 3.6c.36.36.92.39 1.32.08c1.2-.94 2.71-1.5 4.34-1.5c1.64 0 3.14.56 4.34 1.49c.4.31.96.28 1.31-.08l3.6-3.6c.42-.42.38-1.1-.07-1.48C18.72 4.28 15.51 3 12 3"></svg:path>`,
})
export class IcRoundCompassCalibrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
