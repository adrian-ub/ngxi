import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraVideoIcon],svg[streamline-camera-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4M10 9H4.5a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1m3.5 1v2.5"></svg:path>`,
})
export class StreamlineCameraVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
