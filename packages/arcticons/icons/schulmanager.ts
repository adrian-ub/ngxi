import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSchulmanagerIcon],svg[arcticons-schulmanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.19 8.375l19.31 8.574l-19.055 8.702l-11.434-5.208l-2.413 1.715l-.064 6.796l3.303 4.574l-.254 6.034l-4.446-4.383l-4.51 4.446l-.127-6.351l2.985-4.129l.064-8.638l1.715-1.525l-4.51-2.032z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.393 24.127l10.861 5.145l10.48-5.081v4.637l-10.48 5.017l-10.861-5.081z"></svg:path>`,
})
export class ArcticonsSchulmanagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
