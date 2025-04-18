import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBluecoinsIcon],svg[arcticons-bluecoins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.024 24.172a8.8 8.8 0 1 0-12.43-.198"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.557 28.249a8.8 8.8 0 1 0-6.009 10.883"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.28 28.223a8.8 8.8 0 1 0 6.183 10.785M26.4 19.848a8.8 8.8 0 1 0 6.11-10.826"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.802 19.798a8.8 8.8 0 1 0-6.286-10.724m13.021 15.282a8.8 8.8 0 1 0 12.42-.529"></svg:path>`,
})
export class ArcticonsBluecoinsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
