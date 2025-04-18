import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraBoldIcon],svg[ph-device-mobile-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 12H80a28 28 0 0 0-28 28v176a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28V40a28 28 0 0 0-28-28m4 204a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4ZM144 68a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDeviceMobileCameraBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
