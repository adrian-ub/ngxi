import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpeedmeterIcon],svg[arcticons-speedmeter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.13 5.52L29.2 22.81l4.05-3.47l7.9 4.39l-8.15.62v3.13l-26.18 15L19.34 31L9.28 8.9l7 5.76l-2.16-9.14ZM29.2 22.81l-9.86 8.18m13.7-6.64l-6.28.49"></svg:path>`,
})
export class ArcticonsSpeedmeterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
