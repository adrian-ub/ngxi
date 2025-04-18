import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCameraFourIcon],svg[icon-park-twotone-camera-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCameraFour0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path d="M8 10v14c0 8.837 7.163 16 16 16s16-7.163 16-16V10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 10h40"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCameraFour0)"></svg:path>`,
})
export class IconParkTwotoneCameraFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
