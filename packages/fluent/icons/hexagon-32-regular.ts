import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon32RegularIcon],svg[fluent-hexagon-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.619 5a1 1 0 0 0-.853.478l-6.124 10a1 1 0 0 0 0 1.044l6.124 10a1 1 0 0 0 .853.478h10.758a1 1 0 0 0 .853-.478l6.12-10a1 1 0 0 0 0-1.044l-6.12-10A1 1 0 0 0 21.377 5zM8.06 4.433A3 3 0 0 1 10.62 3h10.758a3 3 0 0 1 2.56 1.434l6.119 10a3 3 0 0 1 0 3.132l-6.12 10A3 3 0 0 1 21.377 29H10.62a3 3 0 0 1-2.559-1.433l-6.123-10a3 3 0 0 1 0-3.134z"></svg:path>`,
})
export class FluentHexagon32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
