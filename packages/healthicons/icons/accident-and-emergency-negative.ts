import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAccidentAndEmergencyNegativeIcon],svg[healthicons-accident-and-emergency-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsAccidentAndEmergencyNegative0)"><svg:path fill-rule="evenodd" d="M33 36H15v-2h18z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20.489 16.33c-1.643.284-2.84 1.676-3.036 3.332L16 32h16l-1.456-12.355c-.194-1.648-1.38-3.037-3.014-3.323c-2.45-.429-4.492-.433-7.041.008m1.241 4.318a1 1 0 0 0-1.984-.248l-.905 7.238a1 1 0 1 0 1.984.248z" clip-rule="evenodd"></svg:path><svg:path d="M13 24q0 .505.045 1H10v-2h3.045Q13 23.495 13 24m2.012-6.344a11 11 0 0 0-1.001 1.732l-2.635-1.522l1-1.732zm4.376-3.646q-.916.426-1.732 1.002l-1.522-2.636l1.732-1zM24 13q-.505 0-1 .045V10h2v3.045A11 11 0 0 0 24 13m6.344 2.012a11 11 0 0 0-1.732-1.001l1.522-2.635l1.732 1zm3.646 4.376a11 11 0 0 0-1.002-1.732l2.636-1.522l1 1.732zM35 24q0-.505-.045-1H38v2h-3.045q.045-.495.045-1"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAccidentAndEmergencyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAccidentAndEmergencyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
