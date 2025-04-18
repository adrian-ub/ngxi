import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCameraMusicIcon],svg[tdesign-video-camera-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4.234v15.49l-7-4V20H0V4h17v4.434zm-7 6.532v2.654l5 2.857v-8.51zM15 6H2v12h13zm-2.5 3h-2v5a3 3 0 1 1-2-2.83V7h4zm-4 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class TdesignVideoCameraMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
