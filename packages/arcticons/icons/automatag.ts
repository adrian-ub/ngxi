import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAutomatagIcon],svg[arcticons-automatag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 6.577h-9.769v25.035"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.73 31.612a6.465 6.465 0 0 1-6.464 6.465h0a6.465 6.465 0 0 1-6.466-6.465h0a6.465 6.465 0 0 1 6.465-6.465h0a6.465 6.465 0 0 1 6.466 6.465Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.001 41.268a9.811 9.811 0 1 1 7.897-7.793m-16.57-8.801L4.5 8.846"></svg:path>`,
})
export class ArcticonsAutomatagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
