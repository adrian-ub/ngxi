import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSurveillanceCamerasIcon],svg[icon-park-twotone-surveillance-cameras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSurveillanceCameras0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 6H5m18 17V6"></svg:path><svg:path fill="#555" d="m8.425 19.58l31.876 8.54l-1.743 2.64l-4.002 7.21l-1.743 2.639l-28.011-7.506z"></svg:path><svg:path d="m38.558 30.76l3.864 1.035l-2.07 7.727l-5.796-1.552"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSurveillanceCameras0)"></svg:path>`,
})
export class IconParkTwotoneSurveillanceCamerasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
