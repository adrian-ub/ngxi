import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMedicalIcon],svg[picon-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h2v1H3m0 3H2V4h1V3h2v1h1v1H5v1H3M0 7h8V2H6V0H2v2H0"></svg:path>`,
})
export class PiconMedicalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
