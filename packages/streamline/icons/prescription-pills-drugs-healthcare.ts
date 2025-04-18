import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePrescriptionPillsDrugsHealthcareIcon],svg[streamline-prescription-pills-drugs-healthcare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5.5v12m0-12h5.75A2.75 2.75 0 0 1 10 3.25v0A2.75 2.75 0 0 1 7.25 6H1.5m3 0l8 7.5m-6.5 0L12.5 7"></svg:path>`,
})
export class StreamlinePrescriptionPillsDrugsHealthcareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
