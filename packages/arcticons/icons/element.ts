import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsElementIcon],svg[arcticons-element-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.717 11.431C11.208 11.431 3.5 19.14 3.5 28.65m23.783 7.973c9.509 0 17.218-7.709 17.218-17.218M11.42 27.282c0 9.51 7.708 17.218 17.218 17.218m7.973-23.782c0-9.51-7.708-17.218-17.217-17.218"></svg:path>`,
})
export class ArcticonsElementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
