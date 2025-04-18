import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DecreaseIndentArrowIcon],svg[fluent-mdl2-decrease-indent-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 896v128H250l163 163l-90 90L6 960l317-317l90 90l-163 163z"></svg:path>`,
})
export class FluentMdl2DecreaseIndentArrowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
