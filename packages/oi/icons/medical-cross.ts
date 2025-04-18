import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMedicalCrossIcon],svg[oi-medical-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v2H0v4h2v2h4V6h2V2H6V0z"></svg:path>`,
})
export class OiMedicalCrossIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
