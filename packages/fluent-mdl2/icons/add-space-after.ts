import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddSpaceAfterIcon],svg[fluent-mdl2-add-space-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 768V640h1792v128zm0-640h1792v128H128zm896 1414l163-163l90 90l-317 317l-317-317l90-90l163 163V896h128z"></svg:path>`,
})
export class FluentMdl2AddSpaceAfterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
