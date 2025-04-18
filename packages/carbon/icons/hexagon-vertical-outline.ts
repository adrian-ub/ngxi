import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHexagonVerticalOutlineIcon],svg[carbon-hexagon-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 23V9a1 1 0 0 1 .496-.864l12-7a1 1 0 0 1 1.008 0l12 7A1 1 0 0 1 29 9v14a1 1 0 0 1-.496.864l-12 7a1 1 0 0 1-1.008 0l-12-7A1 1 0 0 1 3 23M5 9.574v12.852l11 6.416l11-6.416V9.574L16 3.158z"></svg:path>`,
})
export class CarbonHexagonVerticalOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
