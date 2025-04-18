import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHexagonIcon],svg[ic-sharp-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.2 3H6.8l-5.2 9l5.2 9h10.4l5.2-9z"></svg:path>`,
})
export class IcSharpHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
