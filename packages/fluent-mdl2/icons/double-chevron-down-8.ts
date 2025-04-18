import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronDown8Icon],svg[fluent-mdl2-double-chevron-down-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 949L262 187L443 6l581 581L1605 6l181 181zm581 81l181 181l-762 762l-762-762l181-181l581 581z"></svg:path>`,
})
export class FluentMdl2DoubleChevronDown8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
