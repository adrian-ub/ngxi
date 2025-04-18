import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPostIcon],svg[arcticons-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.522 15.106H43.5m-15.397 1.798l-3.077 4.224a3.973 3.973 0 1 0-2.738 6.858a4.44 4.44 0 0 0 3.178-.96c1.069-.838 5.918-7.49 8.056-11.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 15.106c-8.665 13.15-14.873 18.232-20.856 18.127s-9.564-4.123-9.564-9.227a9.202 9.202 0 0 1 14.942-7.23M9.3 23.067a12.12 12.12 0 0 1 3.726-8.017l-8.526.056m0 0l4.799 7.993"></svg:path>`,
})
export class ArcticonsPostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
