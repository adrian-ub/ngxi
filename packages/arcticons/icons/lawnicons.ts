import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLawniconsIcon],svg[arcticons-lawnicons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14" cy="14" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="34" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="17" height="17" x="5.5" y="25.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.309 6.5l-6.456 11.182a2 2 0 0 0 1.732 3h12.912a2 2 0 0 0 1.732-3L35.773 6.5a2 2 0 0 0-3.464 0"></svg:path>`,
})
export class ArcticonsLawniconsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
