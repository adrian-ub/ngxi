import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUltrasonicIcon],svg[arcticons-ultrasonic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.504 28.487a3.817 3.817 0 1 1 7.633 0m-.001 7.268a3.817 3.817 0 0 1-7.632 0m0 0v-7.268m7.632 0v7.268m-7.632-7.268v-5.213m-.005.005c0-9.376 8.282-16.977 18.5-16.977s18.5 7.6 18.5 16.977m-.001 5.213a3.817 3.817 0 1 0-7.633 0m.001 7.268a3.817 3.817 0 1 0 7.633 0m-.001 0v-7.268m-7.632 0v7.268m7.632-7.268V23.28"></svg:path>`,
})
export class ArcticonsUltrasonicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
