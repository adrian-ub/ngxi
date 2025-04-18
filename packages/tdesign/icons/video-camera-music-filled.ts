import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCameraMusicFilledIcon],svg[tdesign-video-camera-music-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H0v16h17v-4.277l7 4V4.233l-7 4.2zm-5 3v2h-2v5.5a2.5 2.5 0 1 1-2-2.45V7z"></svg:path>`,
})
export class TdesignVideoCameraMusicFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
