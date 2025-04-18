import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[medicalIconIHospitalIcon],svg[medical-icon-i-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.13 34.78v27.8H7.18V.592h12.95v23.483h24.173V.592h12.95V62.58h-12.95v-27.8z"></svg:path>`,
})
export class MedicalIconIHospitalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
