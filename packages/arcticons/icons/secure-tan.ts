import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSecureTanIcon],svg[arcticons-secure-tan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.16 19.241h27.68a1.9 1.9 0 0 1 1.901 1.9V41.6a1.9 1.9 0 0 1-1.9 1.9H10.16a1.9 1.9 0 0 1-1.901-1.9V21.142a1.9 1.9 0 0 1 1.9-1.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.582 19.241v-4.363c.017-5.75 4.692-10.396 10.441-10.378c5.724.018 10.36 4.654 10.378 10.378v4.363"></svg:path><svg:circle cx="23.991" cy="27.367" r="4.037" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.918v3.675"></svg:path>`,
})
export class ArcticonsSecureTanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
