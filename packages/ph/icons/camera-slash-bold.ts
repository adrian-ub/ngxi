import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashBoldIcon],svg[ph-camera-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14l4 4.37A28 28 0 0 0 20 80v112a28 28 0 0 0 28 28h147.42l3.7 4.07a12 12 0 0 0 17.76-16.14Zm49.35 90L136 154.64a24 24 0 0 1-29.77-32.75ZM48 196a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h16.51l24.92 27.41a48 48 0 0 0 63.34 69.67L173.6 196ZM236 80v94.14a12 12 0 0 1-24 0V80a4 4 0 0 0-4-4h-32a12 12 0 0 1-10-5.34L153.57 52h-51.51a12 12 0 0 1 0-24H160a12 12 0 0 1 10 5.34L182.42 52H208a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhCameraSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
