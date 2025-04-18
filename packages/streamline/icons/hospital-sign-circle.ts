import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHospitalSignCircleIcon],svg[streamline-hospital-sign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 4.5v5m4-5v5M5 7h4m-2 6.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path>`,
})
export class StreamlineHospitalSignCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
