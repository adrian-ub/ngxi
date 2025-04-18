import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCamera1FilledIcon],svg[tdesign-video-camera-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H0v16h17v-4.277l7 4V4.233l-7 4.2zm-7 6H4V8h6z"></svg:path>`,
})
export class TdesignVideoCamera1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
