import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IncreaseIndentArrowIcon],svg[fluent-mdl2-increase-indent-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m573 643l317 317l-317 317l-90-90l163-163H0V896h646L483 733z"></svg:path>`,
})
export class FluentMdl2IncreaseIndentArrowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
