import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHospitalSignSquareIcon],svg[streamline-hospital-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M5 4.5v5m4-5v5M5 7h4"></svg:path>`,
})
export class StreamlineHospitalSignSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
