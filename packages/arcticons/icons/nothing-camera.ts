import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNothingCameraIcon],svg[arcticons-nothing-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="6.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.88" cy="16.06" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 33V15a3.46 3.46 0 0 0-3.42-3.5H8a3.46 3.46 0 0 0-3.5 3.42V33a3.46 3.46 0 0 0 3.42 3.5H40a3.46 3.46 0 0 0 3.5-3.42z"></svg:path>`,
})
export class ArcticonsNothingCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
