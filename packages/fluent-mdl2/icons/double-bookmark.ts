import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleBookmarkIcon],svg[fluent-mdl2-double-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 0v1767l-256-128v385l-640-320l-640 320V256h256V0zm-384 1816V384H384v1432l512-256zm256-256V128H640v128h896v1240z"></svg:path>`,
})
export class FluentMdl2DoubleBookmarkIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
