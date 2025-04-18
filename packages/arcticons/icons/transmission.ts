import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTransmissionIcon],svg[arcticons-transmission-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="10.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.25" ry="6.21"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.73 33.02h10.49V43.5H18.73zM24 33V16.92"></svg:path>`,
})
export class ArcticonsTransmissionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
