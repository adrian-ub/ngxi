import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRegexIcon],svg[arcticons-regex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.881 39.5h-7.38a3.99 3.99 0 0 1-4-4v-23c0-2.216 1.783-4 4-4h7.38m16.238 0h7.38c2.217 0 4 1.784 4 4v23c0 2.216-1.783 4-4 4h-7.38m-3.779-9.05V14.79m-6.78 11.75l13.56-7.83m0 7.83l-13.56-7.83"></svg:path><svg:circle cx="15.33" cy="30.45" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsRegexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
