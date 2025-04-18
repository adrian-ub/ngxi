import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeVideoCameraIcon],svg[icomoon-free-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m-6 0a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m12 5V8c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1.5l4 2.5V7zM10 12H2V9h8z"></svg:path>`,
})
export class IcomoonFreeVideoCameraIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
