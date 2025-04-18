import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHexagonSolidIcon],svg[carbon-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.85 15.449L23.888 3.532A1.07 1.07 0 0 0 22.964 3H9.036c-.38 0-.73.202-.923.532L1.15 15.45c-.199.34-.199.762 0 1.102l6.964 11.917c.193.33.544.532.923.532h13.928c.38 0 .73-.202.923-.532L30.85 16.55c.199-.34.199-.762 0-1.102"></svg:path>`,
})
export class CarbonHexagonSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
