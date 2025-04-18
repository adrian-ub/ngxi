import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCameraVideoOffIcon],svg[humbleicons-camera-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 5l14 14M9 7h6a1 1 0 0 1 1 1v5.5a1 1 0 0 0 .4.8L20 17V7l-4 3m-1 7H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class HumbleiconsCameraVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
