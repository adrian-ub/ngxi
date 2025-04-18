import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCameraFiveIcon],svg[icon-park-twotone-camera-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCameraFive0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="21" r="16" fill="#555"></svg:circle><svg:circle cx="24" cy="21" r="7" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 43h16m-8-6v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCameraFive0)"></svg:path>`,
})
export class IconParkTwotoneCameraFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
