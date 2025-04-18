import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal12RegularIcon],svg[fluent-split-horizontal-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5m-1-3V4H9V2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V4H2V2.5A1.5 1.5 0 0 1 3.5 1h5A1.5 1.5 0 0 1 10 2.5m-7 6V7H2v1.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5V7H9v1.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentSplitHorizontal12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
