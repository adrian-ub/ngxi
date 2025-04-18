import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWifikeyviewIcon],svg[arcticons-wifikeyview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.1 29.72h-.64v-2.08a3.76 3.76 0 1 0-7.52 0v2.08h-.64a1.41 1.41 0 0 0-1.4 1.41v7.32a1.4 1.4 0 0 0 1.4 1.4h8.78a1.41 1.41 0 0 0 1.42-1.4h0v-7.32a1.42 1.42 0 0 0-1.4-1.41m-8.16 0h7.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.1 20.24l4.27-5.57a31.41 31.41 0 0 0-38.87.44L24.22 39.6l5.21-6.77"></svg:path>`,
})
export class ArcticonsWifikeyviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
