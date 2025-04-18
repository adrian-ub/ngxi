import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCameraOffFilledIcon],svg[tdesign-video-camera-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.414 22L2 .586L.586 2l2 2H0v16h17v-1.586l5 5zM24 19.723l-.1-.057L8.234 4H17v4.434l7-4.2z"></svg:path>`,
})
export class TdesignVideoCameraOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
