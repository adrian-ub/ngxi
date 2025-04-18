import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHospitalSignCircleSolidIcon],svg[streamline-hospital-sign-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m5.625-2.5a.625.625 0 1 0-1.25 0v5a.625.625 0 1 0 1.25 0V7.625h2.75V9.5a.625.625 0 1 0 1.25 0v-5a.625.625 0 1 0-1.25 0v1.875h-2.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHospitalSignCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
