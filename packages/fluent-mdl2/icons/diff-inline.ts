import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DiffInlineIcon],svg[fluent-mdl2-diff-inline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 0v2048H256V0zM384 128v384h1280V128zm1280 1408H384v384h1280zm0-256V640H384v640z"></svg:path>`,
})
export class FluentMdl2DiffInlineIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
