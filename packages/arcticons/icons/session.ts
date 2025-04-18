import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSessionIcon],svg[arcticons-session-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.51 4.5h-19a9 9 0 0 0-9 9h0a9.05 9.05 0 0 0 4.3 7.7L24 29.41V18.59h10.28a7.19 7.19 0 0 0 7.1-5.43a7.07 7.07 0 0 0-6.87-8.66"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.49 43.5h19a9 9 0 0 0 9-9h0a9.05 9.05 0 0 0-4.3-7.7L24 18.59v10.82H13.72a7.19 7.19 0 0 0-7.1 5.43a7.07 7.07 0 0 0 6.87 8.66"></svg:path>`,
})
export class ArcticonsSessionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
