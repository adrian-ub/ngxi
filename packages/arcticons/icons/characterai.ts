import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCharacteraiIcon],svg[arcticons-characterai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.282 25.898c-.45.9-1.5 1.5-2.55 1.5h0a3.01 3.01 0 0 1-3-3v-1.95a3.01 3.01 0 0 1 3-3h0c1.05 0 2.1.6 2.55 1.5"></svg:path><svg:circle cx="33.518" cy="16.853" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.518 19.297v8.101m-3.558 0v-8.101m0 5.101a3.01 3.01 0 0 1-3 3h0a3.01 3.01 0 0 1-3-3v-1.95a3.01 3.01 0 0 1 3-3h0a3.01 3.01 0 0 1 3 3"></svg:path><svg:circle cx="21.879" cy="27.148" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsCharacteraiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
