import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVendoraIcon],svg[arcticons-vendora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.247 40.645l14.745-25.54a3.75 3.75 0 0 0-3.246-5.624H9.254a3.75 3.75 0 0 0-3.246 5.624l14.746 25.54a3.75 3.75 0 0 0 6.493 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.254 9.481c14.746 0 26.502 16.425 19.392 28.74"></svg:path>`,
})
export class ArcticonsVendoraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
