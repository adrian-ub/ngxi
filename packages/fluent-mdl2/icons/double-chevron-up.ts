import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleChevronUpIcon],svg[fluent-mdl2-double-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1957L1024 933l1024 1024l-91 91l-933-933l-933 933zM1024 219L91 1152l-91-91L1024 37l1024 1024l-91 91z"></svg:path>`,
})
export class FluentMdl2DoubleChevronUpIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
