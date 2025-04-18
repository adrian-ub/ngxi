import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HexagonIcon],svg[fluent-mdl2-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2024 960l-497 960H521L24 960L521 0h1006zm-144 0l-431-832H599L168 960l431 832h850z"></svg:path>`,
})
export class FluentMdl2HexagonIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
