import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMedicationIcon],svg[picon-medication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h4v1H2M1 4q0-2 2-2h2q2 0 2 2v4H1m2-3H2v1h1v1h2V6h1V5H5V4H3"></svg:path>`,
})
export class PiconMedicationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
