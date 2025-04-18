import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8CircleNotchIcon],svg[icons8-circle-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4.18v2.022c4.56.93 8 4.97 8 9.798c0 5.514-4.486 10-10 10S6 21.514 6 16c0-4.83 3.44-8.87 8-9.798v-2.02C8.334 5.136 4 10.065 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.934-4.334-10.863-10-11.82"></svg:path>`,
})
export class Icons8CircleNotchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
