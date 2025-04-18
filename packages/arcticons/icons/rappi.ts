import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRappiIcon],svg[arcticons-rappi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.54 18.25a4.8 4.8 0 0 0-2.12.41c-4.82 2.18-5.8 7.34-11.87 3.12c2.64 9.09 10.45 7.94 12.62 7.87a9.75 9.75 0 0 0 6.88-3.4a9.75 9.75 0 0 0 6.88 3.4c2.21.07 10 1.22 12.62-7.87c-6.1 4.26-7.07-.94-11.87-3.12c-2.62-1.18-6 .36-7.59 2.47a7.57 7.57 0 0 0-5.48-2.88Z"></svg:path>`,
})
export class ArcticonsRappiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
