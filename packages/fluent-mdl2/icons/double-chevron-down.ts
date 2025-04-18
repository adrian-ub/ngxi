import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronDownIcon],svg[fluent-mdl2-double-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 91L1024 1115L0 91L91 0l933 933L1957 0zM1024 1829l933-933l91 91l-1024 1024L0 987l91-91z"></svg:path>`,
})
export class FluentMdl2DoubleChevronDownIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
