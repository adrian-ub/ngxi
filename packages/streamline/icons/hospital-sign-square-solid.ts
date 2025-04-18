import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHospitalSignSquareSolidIcon],svg[streamline-hospital-sign-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm5.625 3.5a.625.625 0 1 0-1.25 0v5a.625.625 0 1 0 1.25 0V7.625h2.75V9.5a.625.625 0 1 0 1.25 0v-5a.625.625 0 1 0-1.25 0v1.875h-2.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHospitalSignSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
