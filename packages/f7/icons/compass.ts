import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7CompassIcon],svg[f7-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52S4 41.255 4 28S14.745 4 28 4m0 4C16.954 8 8 16.954 8 28s8.954 20 20 20s20-8.954 20-20S39.046 8 28 8m10.676 8.857l-7.273 14.546l-14.546 7.273L24.13 24.13zm-12.362 9.31l-4.766 7.819l7.818-4.767z"></svg:path>`,
})
export class F7CompassIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
