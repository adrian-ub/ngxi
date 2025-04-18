import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNespressoIcon],svg[arcticons-nespresso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.476 32.153V15.46c3.64 5.593 8.485 12.276 14.2 18.064c2.713 2.747 6.072 4.07 9.036 4.07a13.6 13.6 0 0 0 3.857-.572"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.663 15.847V32.54c-3.64-5.593-8.485-12.276-14.2-18.064c-2.713-2.747-6.072-4.07-9.037-4.07a13.6 13.6 0 0 0-3.857.573"></svg:path>`,
})
export class ArcticonsNespressoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
