import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceSurveillanceCameraIcon],svg[guidance-surveillance-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M23.5 9v5m-13-.5v.649a7.5 7.5 0 0 0 1.894 4.982l.106.119v.25H0m20.5-6v-2.7a7.5 7.5 0 0 1 2.432-5.53l.568-.52V4.5H5a4.5 4.5 0 0 0 0 9z"></svg:path>`,
})
export class GuidanceSurveillanceCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
