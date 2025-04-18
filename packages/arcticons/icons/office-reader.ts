import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOfficeReaderIcon],svg[arcticons-office-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.029 16.259L24.52 4.367L4.378 16.26l20.144 11.89Zm-33.306 3.763l-6.768 4.17l20.566 11.775L44.03 24.192l-6.465-3.947"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.029 16.259L24.52 4.367L4.378 16.26l20.144 11.89Zm-33.306 3.763l-6.768 4.17l20.566 11.775L44.03 24.192l-6.465-3.947M11.012 28.08l-6.767 4.17L24.81 44.026L44.319 32.25l-6.465-3.947"></svg:path>`,
})
export class ArcticonsOfficeReaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
