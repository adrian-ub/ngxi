import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCamera3FilledIcon],svg[tdesign-video-camera-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 19.723V4.233l-7 4.2V4H0v16h17v-4.277zM12.3 12L6 16.2V7.8z"></svg:path>`,
})
export class TdesignVideoCamera3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
