import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCameraFilledIcon],svg[tdesign-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 12.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path fill="currentColor" d="M7.882 2h8.236l1.5 3H23v16H1V5h5.382zM6.75 12.75a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 0 0-10.5 0"></svg:path>`,
})
export class TdesignCameraFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
