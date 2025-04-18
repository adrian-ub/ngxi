import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHexagonVerticalSolidIcon],svg[carbon-hexagon-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.551 30.85l11.917-6.963a1.07 1.07 0 0 0 .532-.923V9.036c0-.38-.202-.73-.532-.923L16.55 1.15a1.09 1.09 0 0 0-1.102 0L3.532 8.113A1.07 1.07 0 0 0 3 9.036v13.928c0 .38.202.73.532.923L15.45 30.85c.34.199.762.199 1.102 0Z"></svg:path>`,
})
export class CarbonHexagonVerticalSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
