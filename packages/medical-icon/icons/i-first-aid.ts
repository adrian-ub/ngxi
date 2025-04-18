import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[medicalIconIFirstAidIcon],svg[medical-icon-i-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.321 20.418H42.908V1.005h-22.34v19.413H1.155v22.339h19.413V62.17h22.34V42.757h19.413z"></svg:path>`,
})
export class MedicalIconIFirstAidIcon {
  readonly viewBox = input("0 0 63 64")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
