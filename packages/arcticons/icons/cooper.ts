import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCooperIcon],svg[arcticons-cooper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.39 19.077a4.51 4.51 0 0 0-4.517 4.507v.301a4.51 4.51 0 0 0 4.5 4.524h4.089L5.5 40.14h12.1l6.4-7.526l6.4 7.526h12.1l-9.96-11.73h4.085a4.51 4.51 0 0 0 4.52-4.504v-.305a4.51 4.51 0 0 0-4.5-4.524zm18.207-5.621a5.593 5.593 0 0 1-5.59 5.596h0c-3.087 0-5.589-2.506-5.589-5.596s2.503-5.596 5.59-5.596s5.59 2.505 5.59 5.596z"></svg:path>`,
})
export class ArcticonsCooperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
