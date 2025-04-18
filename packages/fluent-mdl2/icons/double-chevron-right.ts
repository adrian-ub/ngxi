import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronRightIcon],svg[fluent-mdl2-double-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m91 0l1024 1024L91 2048l-91-91l933-933L0 91zm896 0l1024 1024L987 2048l-91-91l933-933L896 91z"></svg:path>`,
})
export class FluentMdl2DoubleChevronRightIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
