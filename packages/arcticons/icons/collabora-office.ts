import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCollaboraOfficeIcon],svg[arcticons-collabora-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.46 34.61L18 43.06a1.48 1.48 0 0 0 2.11 0h0l18-18a1.49 1.49 0 0 0 0-2.11h0l-18-18a1.49 1.49 0 0 0-2.12 0h0l-8.5 8.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.46 34.61l9.36-9.36a1.73 1.73 0 0 0 0-2.45h0l-9.36-9.36Z"></svg:path>`,
})
export class ArcticonsCollaboraOfficeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
