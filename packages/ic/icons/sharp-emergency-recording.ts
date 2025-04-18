import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEmergencyRecordingIcon],svg[ic-sharp-emergency-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.48V4H2v16h16v-6.48l4 3.98v-11zM12 12l3 1.73l-1 1.73l-3-1.73V17H9v-3.27l-3 1.73l-1-1.73L8 12l-3-1.73l1-1.73l3 1.73V7h2v3.27l3-1.73l1 1.73z"></svg:path>`,
})
export class IcSharpEmergencyRecordingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
