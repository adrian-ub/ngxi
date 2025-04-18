import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronLeftIcon],svg[fluent-mdl2-double-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2048 91l-933 933l933 933l-91 91L933 1024L1957 0zm-896 0l-933 933l933 933l-91 91L37 1024L1061 0z"></svg:path>`,
})
export class FluentMdl2DoubleChevronLeftIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
