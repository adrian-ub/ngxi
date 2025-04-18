import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SortIcon],svg[fluent-mdl2-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1069 499l-90 90l-338-337l-1 1796H512l1-1799l-340 340l-90-90L576 6zm807 960l91 90l-493 493l-494-493l91-90l338 338l-1-1797h128l1 1798z"></svg:path>`,
})
export class FluentMdl2SortIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
