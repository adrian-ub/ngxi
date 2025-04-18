import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIriunwebcamIcon],svg[arcticons-iriunwebcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.464 33.868a8.687 8.687 0 1 1 8.687-8.687a8.696 8.696 0 0 1-8.687 8.687"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.396 36.486A11.417 11.417 0 1 0 13.979 25.07a11.43 11.43 0 0 0 11.417 11.417M24 4.5a17.219 17.219 0 1 0 17.219 17.219A17.22 17.22 0 0 0 24 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.81 37.537a38.8 38.8 0 0 1 6.883 5.346a3.3 3.3 0 0 1-.558.45a50 50 0 0 0-12.464-1.4a53.8 53.8 0 0 0-13.39 1.567a15 15 0 0 1-.98-.637c1.045-1.055 5.852-4.848 7.102-5.236"></svg:path>`,
})
export class ArcticonsIriunwebcamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
