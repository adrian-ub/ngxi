import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiCameraFilledIcon],svg[weui-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.732 4a.5.5 0 0 1 .416.223L17 7h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4l1.852-2.777A.5.5 0 0 1 9.268 4zM12 16.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class WeuiCameraFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
