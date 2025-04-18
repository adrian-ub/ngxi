import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCameraIcon],svg[tdesign-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4h17v4.434l7-4.2v15.532l-7-4.2V20H0zm15 2H2v12h13zm2 7.234l5 3V7.766l-5 3z"></svg:path>`,
})
export class TdesignVideoCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
