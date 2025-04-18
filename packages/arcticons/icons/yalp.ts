import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYalpIcon],svg[arcticons-yalp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.76 8.74L21.77 24l-5-5l17.9-9.95a6.1 6.1 0 0 1 1.73-.64a2.06 2.06 0 0 1 1.36.33"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.76 8.74a3.6 3.6 0 0 1 .89 2.85v24.82a3.54 3.54 0 0 1-.9 2.83L21.77 24l16-15.26Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.81 19l5 5l-5 5l-5.88-3.26c-2.11-1.17-2.1-2.4 0-3.56z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.77 24l16 15.24c-.78.71-2.1.25-3.07-.29L16.81 29Z"></svg:path>`,
})
export class ArcticonsYalpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
