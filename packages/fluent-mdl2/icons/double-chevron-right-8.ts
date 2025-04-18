import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronRight8Icon],svg[fluent-mdl2-double-chevron-right-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m187 262l762 762l-762 762L6 1605l581-581L6 443zm1786 762l-762 762l-181-181l581-581l-581-581l181-181z"></svg:path>`,
})
export class FluentMdl2DoubleChevronRight8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
