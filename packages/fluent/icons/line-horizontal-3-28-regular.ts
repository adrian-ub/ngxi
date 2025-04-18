import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal328RegularIcon],svg[fluent-line-horizontal-3-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.75A.75.75 0 0 1 2.75 5h22.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75m0 16a.75.75 0 0 1 .75-.75h22.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75M2.75 13a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentLineHorizontal328RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
