import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTheHinduEPaperIcon],svg[arcticons-the-hindu-e-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 20.94h29m-29 5.12h29M20.276 15.82H38.5M20.276 10.7H38.5m-29 20.48h29m-29 5.12h29m-29-25.6h3.386m-1.693 5.11V10.7m3.609.01v5.11m3.385-5.11v5.11m-3.385-2.565h3.385"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsTheHinduEPaperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
