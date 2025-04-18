import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBackdropsIcon],svg[arcticons-backdrops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="16.608" height="31.707" x="15.696" y="8.147" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.238"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.304 13.248h5.562a1.235 1.235 0 0 1 1.237 1.238v19.027a1.235 1.235 0 0 1-1.237 1.238h-5.43m-17.06 0h-5.241a1.235 1.235 0 0 1-1.238-1.238V14.486a1.235 1.235 0 0 1 1.237-1.238h5.563"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.103 16.384h3.16a1.235 1.235 0 0 1 1.237 1.238v12.755a1.235 1.235 0 0 1-1.237 1.238h-3.16m-30.207 0H5.737A1.235 1.235 0 0 1 4.5 30.377V17.622a1.235 1.235 0 0 1 1.237-1.238h3.16"></svg:path>`,
})
export class ArcticonsBackdropsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
