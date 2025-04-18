import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGhosteryIcon],svg[arcticons-ghostery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.531 41.17s3.188-6.5 3.222-9.089c.069-5.124 0-14.92 0-14.92S9.773 4.574 23.77 4.5c14.687-.08 14.676 12.47 14.676 12.47s-.009 9.846.113 15.072c.062 2.645 2.91 9.127 2.91 9.127s-4.89-1.993-7.167-1.28c-1.68.527-2.129 3.557-3.959 3.608c-2.386.067-4.016-2.088-6.403-2.073c-2.19.014-3.36 2.137-5.55 2.073c-1.97-.057-2.528-3.086-4.43-3.607c-2.3-.63-7.428 1.279-7.428 1.279Z"></svg:path><svg:circle cx="24" cy="18.221" r="8.521"></svg:circle><svg:path d="M23.84 9.78s3.537 3.263 3.46 8.282c-.08 5.202-3.46 8.6-3.46 8.6s-3.158-3.457-3.14-8.6c.017-5.14 3.14-8.282 3.14-8.282m-8.208 8.44h16.737"></svg:path></svg:g>`,
})
export class ArcticonsGhosteryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
