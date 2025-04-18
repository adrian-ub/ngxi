import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FastForwardIcon],svg[fluent-mdl2-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1152 379l806 645l-806 650zm128 266v762l474-383zM256 1674V379l806 645zM384 645v762l474-383z"></svg:path>`,
})
export class FluentMdl2FastForwardIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
