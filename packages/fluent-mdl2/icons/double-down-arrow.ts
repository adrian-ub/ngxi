import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleDownArrowIcon],svg[fluent-mdl2-double-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512 1798l261-261l90 90l-415 415l-415-415l90-90l261 261V0h128zm1285-261l90 90l-415 415l-415-415l90-90l261 261V0h128v1798z"></svg:path>`,
})
export class FluentMdl2DoubleDownArrowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
