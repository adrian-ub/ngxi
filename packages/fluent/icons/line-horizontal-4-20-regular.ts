import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal420RegularIcon],svg[fluent-line-horizontal-4-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 4h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1M2 11.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.5 3.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentLineHorizontal420RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
