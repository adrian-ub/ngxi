import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInsularIcon],svg[arcticons-insular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.47 7.88H8.53L4.5 34.53h39zm-30.94 0L43.5 34.53M14.61 7.88l28.1 21.41M20.7 7.88l21.22 16.17M26.78 7.88l14.34 10.93M32.87 7.88l7.46 5.69M7.9 12.04l29.52 22.49M7.27 16.2l24.06 18.33M6.64 20.35l18.61 14.18M6.02 24.51l13.14 10.02M5.39 28.67l7.69 5.86m28.44 5.59H6.48L4.5 34.53h39z"></svg:path>`,
})
export class ArcticonsInsularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
