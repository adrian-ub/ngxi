import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExteragramGoogleIcon],svg[arcticons-exteragram-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.345 27.778c1.777 1.78 3.015 4.217 3.84 6.359c.547 1.424 2.569 1.396 3.068-.046l5.865-16.928c.46-1.327-.811-2.6-2.139-2.142L14.043 20.86c-1.443.497-1.474 2.519-.051 3.069c2.14.827 4.576 2.069 6.353 3.849"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.02 27.48A12.94 12.94 0 0 1 26.06 26c1.32 0 2.6.2 3.8.56M16.6 25.11c5.14-1.54 9.49-4.92 12.28-9.37"></svg:path>`,
})
export class ArcticonsExteragramGoogleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
