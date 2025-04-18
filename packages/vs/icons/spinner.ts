import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsSpinnerIcon],svg[vs-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 256q212 0 362 150t150 362q0 104-39.5 197.5T1130 1130l181 181q106-106 165.5-246.5T1536 768q0-209-103-385.5T1153.5 103T768 0T382.5 103T103 382.5T0 768q0 156 59.5 296.5T225 1311l181-181q-71-71-110.5-164.5T256 768q0-212 150-362t362-150"></svg:path>`,
})
export class VsSpinnerIcon {
  readonly viewBox = input("0 0 1536 1344")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
