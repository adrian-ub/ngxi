import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNcellAppIcon],svg[arcticons-ncell-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.023 35.45L24.074 43l12.903-7.575v-15.25L11.023 5v15.225l13.051 7.65zM24 12.588L24.074 43M11.023 20.225L24 12.588m12.977 7.587l-12.903 7.7m0-.001l12.903 7.55"></svg:path>`,
})
export class ArcticonsNcellAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
